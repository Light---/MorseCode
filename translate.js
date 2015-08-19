
function letterToMorseCode (letter) {
  var alphabet = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '.': '.-.-.-',
    ' ': '/'
  };

  var morseCodeLetter = alphabet[letter.toUpperCase()];
  return morseCodeLetter;
}

function translate (textToTranslate) {
  var result = ''

  for (var i = 0; i < textToTranslate.length; i++) {
    var currentLetter = textToTranslate[i]
    result = result + letterToMorseCode(currentLetter)
  }

  return result;
}


function performTranslation() {
  var inputTextBoxElement = document.getElementById('inputTextBox')

  var input = inputTextBoxElement.value
  var result = translate(input)

  var resultElement = document.getElementById('resultDiv')
  resultElement.innerHTML = result;
}

var inputTextBoxElement = document.getElementById('inputTextBox')
inputTextBoxElement.onkeydown = function(){
  performTranslation();
}

performTranslation();

function populateList () {
  var alphabet = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '.': '.-.-.-',
    ' ': '/'
  };

  var result = ''

  for (var letter in alphabet){
    result = result + '<li> "' + letter + '" = ' + alphabet[letter] + '</li>'
  }

  return result
}

var morseCodeMapElement = document.getElementById('morseCodeMap')
morseCodeMapElement.innerHTML = populateList()
