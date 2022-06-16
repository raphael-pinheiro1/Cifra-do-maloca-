//ESCONDE-MOSTRA CAMPO INCREMENTO E BTNS CODE-DECODE

var cipherSelect = document.getElementById('cipherSelect')
cipherSelect.addEventListener('change', function() {

    if(cipherSelect.value == 'cifraDeCesar'){
        document.getElementById('chave').style.display = 'flex'
        document.getElementById('testeCaesar').style.display = 'flex'
        document.getElementById('btnCaesar').style.display = 'flex'

        //BASE 64
        document.getElementById('testeBase64').style.display = 'none'
        document.getElementById('btnBase64').style.display = 'none'

    } else if (cipherSelect.value == 'Base64'){

        document.getElementById('testeBase64').style.display = 'flex'
        document.getElementById('btnBase64').style.display = 'flex'

        //CAESAR
        document.getElementById('testeCaesar').style.display = 'none'
        document.getElementById('chave').style.display = 'none'
        document.getElementById('btnCaesar').style.display = 'none'

    }   
})


//CAESAR CIPHER
function showCodeBtnCaesar() {

    document.getElementById('btnCodeCaesar').style.display = "inline-block"
    document.getElementById('btnDecodeCaesar').style.display = "none"
    document.getElementById('firstLastP').style.display = "block"
    document.getElementById('SecondLastP').style.display = "none"
}

function showDecodeBtnCaesar() {

    document.getElementById('btnCodeCaesar').style.display = "none"
    document.getElementById('btnDecodeCaesar').style.display = "inline-block"
    document.getElementById('SecondLastP').style.display = "block"
    document.getElementById('firstLastP').style.display = "none"
}


//BASE 64

function showCodeBtnBase64() {

    document.getElementById('btnCodeBase64').style.display = "inline-block"
    document.getElementById('btnDecodeBase64').style.display = "none"
    document.getElementById('firstLastP').style.display = "block"
    document.getElementById('SecondLastP').style.display = "none"
}

function showDecodeBtnBase64() {

    document.getElementById('btnCodeBase64').style.display = "none"
    document.getElementById('btnDecodeBase64').style.display = "inline-block"
    document.getElementById('SecondLastP').style.display = "block"
    document.getElementById('firstLastP').style.display = "none"
}

/*
==========================================
*/


// PEGAR AUTOMATICO DO TEXTAREA 1 PARA O TEXTAREA 2

// let areaTextInicio = document.getElementById('textoInicial')
// let areaTextFim = document.getElementById('textoFinal')

// areaTextInicio.addEventListener('keydown', () => {
//     let texto = document.getElementById('textoInicial').value
//     areaTextFim.innerText = texto
//     console.log('abc')
// })


/*
==========================================
*/


//CAESAR CIPHER

function caesarCipher(str, num) {

    num = num % 26

    var lowerCaseStr = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    var newStr = '';

    for(var i = 0; i < lowerCaseStr.length; i++) {
        var currentLetter = lowerCaseStr[i]
        if (currentLetter === ' ') {
            newStr += currentLetter;
            continue;
        }

        var currentIndex = alphabet.indexOf(currentLetter)
        var newIndex = currentIndex + num

        if (newIndex > 25) {
            newIndex = newIndex - 26 

        } else if (newIndex < 0) {
            newIndex = newIndex + 26

        }
        
        if(str[i] === str[i].toUpperCase()) {
            newStr += alphabet[newIndex].toUpperCase()
            
        } else {
            newStr += alphabet[newIndex]
            
        }

    }
    
    return newStr
}


//CODIFICA
document.getElementById('btnCodeCaesar').addEventListener('click', function() {

    var inserirTextoCesar = document.getElementById('textoFinal')
    var str = document.getElementById('textoInicial').value
    var num = document.getElementById('incremento').value
    
    inserirTextoCesar.innerText = caesarCipher(str, num)
})

//DECODICA
document.getElementById('btnDecodeCaesar').addEventListener('click', function() { 

    var inserirTextoCesar2 = document.getElementById('textoFinal')
    var str = document.getElementById('textoInicial').value
    var num = document.getElementById('incremento').value
    num *= -1
    
    inserirTextoCesar2.innerText = caesarCipher(str, num)
})


/*
==========================================
*/


//BASE 64

//CODIFICA
document.getElementById('btnCodeBase64').addEventListener('click', () => {

    inserirTextoBase64 = document.getElementById('textoFinal')
    inserirTextoBase64.innerText = btoa(document.getElementById('textoInicial').value)
})

//DECODIFICA
document.getElementById('btnDecodeBase64').addEventListener('click', () => {

    inserirTextoBase64dois = document.getElementById('textoFinal')
    inserirTextoBase64dois.innerText = atob(document.getElementById('textoInicial').value)
})


/*
==========================================
*/


//COPY BUTTON

function copyTextbtn() {
    /* Get the text field */
    var copyText = document.getElementById("textoFinal");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}

function showCopyBtn() {
    document.getElementById('copyBtn').style.display = "flex"
}

//Simula o efeito de :active e :hover (visto que simular o efeito :active "anula" o hover natural do css)
function copiedUp() {
    document.querySelector('#copyP').innerText = "COPIADO"
    document.querySelector('#copyBtn').style.backgroundColor = "rgb(20, 107, 20)"
}

function copiedOver() {
    document.querySelector('#copyBtn').style.backgroundColor = "#7a7a7a"
}

function copiedOut() {
    document.querySelector('#copyP').innerText = "COPIAR"
    document.querySelector('#copyBtn').style.backgroundColor = "#505050"
}