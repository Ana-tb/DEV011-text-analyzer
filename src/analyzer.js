const analyzer = {  
//Recuento de palabras
  getWordCount: (text) => { 
    text = text.trim();
    const words = text.split(/\s+/);
    return words.length
  },

  //Recuento de caracteres
  getCharacterCount: (text) => {  
    text = text.trim();
    const characterCount = text.length;
    return characterCount;
  },

  getAverageWordLength: (text) => {    
    const regex = /\b[\w']+\b/g; //seleccionamos las letras y Ñs, estaba contando más palabras de las que debería
    const words = text.match(regex);
    
    if (!words || words.length === 0) {
      return 0;
    } // ahora si habrán 0 palabras, asi que podrá haber un 0 de output
    const sumChar = words.reduce((total,word)=> total + word.length,0);
    const validChar = words.filter(word=>!/^\d+$/.test(word));

    const averageLength = sumChar/validChar.length
    return parseFloat(averageLength.toFixed(2)); // tofixed para redondear
  },

  getCharacterCountExcludingSpaces: (text) => {
    const cleanText = text.replace(/[^\w]/g, "");
    const charcaterCountExcludingSpaces = cleanText.length;
    return charcaterCountExcludingSpaces;
  },
 
  getNumberCount: (text) => {
    const regex = /\b\d+(?:[.,]\d+)?\b/g;
    const numbers = text.match(regex);
    if(!numbers) {
      return 0;
    }
    let numberCount = 0
    for (let i = 0; i < numbers.length; i++) {
      numberCount++;
    }
    return numberCount;
  },
  getNumberSum: (text) => {
    const regex = /[-+]?\b\d+\b(?:\.\d+)?/g;
    const numbers = text.match(regex);
    if (!numbers || numbers.length === 0) {
      return 0;
    }
    let sum = 0;
    numbers.forEach((num) => {
      const parsedNum = parseFloat(num);
      if (!isNaN(parsedNum)) {
        sum += parsedNum;
      }
    });
  
    return sum;
  },
};

export default analyzer;