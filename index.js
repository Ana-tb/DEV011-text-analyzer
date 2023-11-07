import analyzer from './analyzer.js';
//Llamar elementos del DOM 
const textarea = document.querySelector("textarea[name='user-input']")
const Limpiar = document.getElementById('reset-button')



//Eventos del DOM
//Conteo de Caracteres 
textarea.addEventListener('keyup', function () {
  //Recuento de Palabras
  const wordcount = document.querySelector("[data-testid='word-count']");
  const contarPalabras = analyzer.getWordCount(textarea.value);
  wordcount.textContent = `Recuento de palabras: ${contarPalabras}`
 
  //Recuento de caracteres
  const characterCount = document.querySelector("[data-testid='character-count']")
  const contarCaracteres = analyzer.getCharacterCount(textarea.value);
  characterCount.textContent = `Recuento de caracteres: ${contarCaracteres}`

  //CARACTERES SIN ESPACIOS
  const charcaterCountExcludingSpaces = document.querySelector("[data-testid='character-no-spaces-count']")
  const caracteresSinEspacios = analyzer.getCharacterCountExcludingSpaces(textarea.value);
  charcaterCountExcludingSpaces.textContent =`Recuento de caracteres excluyendo espacios y signos de puntuación: ${caracteresSinEspacios}`

  //RECUENTO DE NÚMEROS
  const numberCount = document.querySelector("[data-testid='number-count']")
  const recuentodenumeros = analyzer.getNumberCount(textarea.value);
  numberCount.textContent = `Recuento de números: ${recuentodenumeros}`

  //SUMA TOTAL DE NÚMEROS 
  const numberSum = document.querySelector("[data-testid='number-sum']")
  const sumaNumeros = analyzer.getNumberSum(textarea.value);
  numberSum.textContent = `Suma total de números: ${sumaNumeros}`

  //LONGITUD MEDIA DE PALABRAS 
  const averageWordLength = document.querySelector("[data-testid='word-length-average']")
  const longitudmedia = analyzer.getAverageWordLength(textarea.value);
  averageWordLength.textContent = `Longitud media de palabras: ${longitudmedia}`
})

//BOTON DE LIMPIAR 
Limpiar.addEventListener('click', function() {
  textarea.value = "";
  //Recuento de Palabras
  const wordcount = document.querySelector("[data-testid='word-count']");
  wordcount.textContent = `Recuento de palabras: 0`
  //Recuento de caracteres
  const characterCount = document.querySelector("[data-testid='character-count']")
  characterCount.textContent =`Recuento de caracteres: 0`
  //CARACTERES SIN ESPACIOS
  const charcaterCountExcludingSpaces = document.querySelector("[data-testid='character-no-spaces-count']")
  charcaterCountExcludingSpaces.textContent = `Recuento de caracteres excluyendo espacios y signos de puntuación: 0`
  //RECUENTO DE NÚMEROS
  const numberCount = document.querySelector("[data-testid='number-count']")
  numberCount.textContent = `Recuento de números: 0`
  //SUMA TOTAL DE NÚMEROS 
  const numberSum = document.querySelector("[data-testid='number-sum']")
  numberSum.textContent = `Suma total de números: 0`
  //LONGITUD MEDIA DE PALABRAS 
  const averageWordLength = document.querySelector("[data-testid='word-length-average']")
  averageWordLength.textContent =`Longitud media de palabras: 0`
})



    


