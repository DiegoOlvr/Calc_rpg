var FORCA = document.getElementById("FOR_BASE");
var DESTREZA = document.getElementById("DES_BASE");
var CONSTITUICAO = document.getElementById("CON_BASE");
var INTELIGENCIA = document.getElementById("INT_BASE");
var SABEDORIA = document.getElementById("SAB_BASE");
var CARISMA = document.getElementById("CAR_BASE");
var TOTAL_PTS = document.getElementsByClassName("valorPontos")[0];

var calc_btn = document.getElementById("calcular");

calc_btn.addEventListener('click', calcular);

function calcular() {

    let TOTAL_FORCA = document.getElementById('FOR_TOTAL');
    let TOTAL_DESTREZA = document.getElementById('DES_TOTAL');
    let TOTAL_CONSTITUICAO = document.getElementById('CON_TOTAL');
    let TOTAL_INTELIGENCIA = document.getElementById('INT_TOTAL');
    let TOTAL_SABEDORIA = document.getElementById('SAB_TOTAL');
    let TOTAL_CARISMA = document.getElementById('CAR_TOTAL');

    TOTAL_FORCA.value = Number(FORCA.value);
    TOTAL_DESTREZA.value = Number(DESTREZA.value);
    TOTAL_CONSTITUICAO.value = Number(CONSTITUICAO.value);
    TOTAL_INTELIGENCIA.value = Number(INTELIGENCIA.value);
    TOTAL_SABEDORIA.value = Number(SABEDORIA.value);
    TOTAL_CARISMA.value = Number(CARISMA.value);

    SOMA = Number(TOTAL_FORCA.value) +
        Number(TOTAL_DESTREZA.value) +
        Number(TOTAL_CONSTITUICAO.value) +
        Number(TOTAL_INTELIGENCIA.value) +
        Number(TOTAL_SABEDORIA.value) +
        Number(TOTAL_CARISMA.value);
    
    TOTAL_PTS.innerHTML = Number(TOTAL_PTS.innerHTML) - SOMA;

    
}