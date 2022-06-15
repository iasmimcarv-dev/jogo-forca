let tentativas = 6
let listaDinamica = []
let palavraSecretaCategoria
let palavraSecretaSorteada
const palavras = [
  (palavra001 = {
    nome: 'IRLANDA',
    categoria: 'LUGARES'
  }),
  (palavra002 = {
    nome: 'EQUADOR',
    categoria: 'LUGARES'
  }),
  (palavra003 = {
    nome: 'BRASIL',
    categoria: 'LUGARES'
  }),
  (palavra004 = {
    nome: 'ESPANHA',
    categoria: 'LUGARES'
  }),
  (palavra005 = {
    nome: 'COREIA',
    categoria: 'LUGARES'
  }),
  (palavra006 = {
    nome: 'MACARRAO',
    categoria: 'COMIDAS'
  }),
  (palavra007 = {
    nome: 'CARNE',
    categoria: 'COMIDAS'
  }),
  (palavra008 = {
    nome: 'SORVETE',
    categoria: 'COMIDAS'
  }),
  (palavra009 = {
    nome: 'HAMBURGUER',
    categoria: 'COMIDAS'
  }),
  (palavra010 = {
    nome: 'SUSHI',
    categoria: 'COMIDAS'
  }),
  (palavra011 = {
    nome: 'GIRAFA',
    categoria: 'ANIMAIS'
  }),
  (palavra012 = {
    nome: 'TIGRE',
    categoria: 'ANIMAIS'
  }),
  (palavra013 = {
    nome: 'RINOCERONTE',
    categoria: 'ANIMAIS'
  }),
  (palavra014 = {
    nome: 'CUTIA',
    categoria: 'ANIMAIS'
  }),
  (palavra015 = {
    nome: 'GUAXINIM',
    categoria: 'ANIMAIS'
  }),
  (palavra016 = {
    nome: 'ABACAXI',
    categoria: 'FRUTAS'
  }),
  (palavra017 = {
    nome: 'MORANGO',
    categoria: 'FRUTAS'
  }),
  (palavra018 = {
    nome: 'CARAMBOLA',
    categoria: 'FRUTAS'
  }),
  (palavra019 = {
    nome: 'MELANCIA',
    categoria: 'FRUTAS'
  }),
  (palavra020 = {
    nome: 'ABACATE',
    categoria: 'FRUTAS'
  })
]

criarPalavraSecreta()
function criarPalavraSecreta() {
  const indexPalavra = parseInt(Math.random() * palavras.length)

  palavraSecretaSorteada = palavras[indexPalavra].nome
  palavraSecretaCategoria = palavras[indexPalavra].categoria
}

montarPalavraNaTela()
function montarPalavraNaTela() {
  const categoria = document.getElementById('categoria')
  categoria.innerHTML = palavraSecretaCategoria

  const palavraTela = document.getElementById('palavra-secreta')
  palavraTela.innerHTML = ''

  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (listaDinamica[i] == undefined) {
      listaDinamica[i] = '&nbsp;'
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        " <div class='letras'>" +
        listaDinamica[i] +
        ' </div>'
    } else {
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        " <div class='letras'>" +
        listaDinamica[i] +
        ' </div>'
    }
  }
}

function verificaLetraEscolhida(letra) {
  document.getElementById('tecla-' + letra).disabled = true
  if (tentativas > 0) {
    mudarStyleLetra('tecla-' + letra)
    comparaListas(letra)
    montarPalavraNaTela()
  }
}

function mudarStyleLetra(tecla) {
  document.getElementById(tecla).style.background = '#609ED4'
  document.getElementById(tecla).style.color = '#ffffff'
}

function comparaListas(letra) {
  const pos = palavraSecretaSorteada.indexOf(letra)
  if (pos < 0) {
    tentativas--
    carregaImagemForca()

    if (tentativas == 0) {
      abreModal(
        'Ops!',
        'Não foi dessa vez ... A palavra secreta era <br>' +
          palavraSecretaSorteada
      )
    }
  } else {
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
      if (palavraSecretaSorteada[i] == letra) {
        listaDinamica[i] = letra
      }
    }
  }

  let vitoria = true
  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] != listaDinamica[i]) {
      vitoria = false
    }
  }

  if (vitoria == true) {
    abreModal('Parabéns!', 'Você venceu.')
    tentativas = 0
  }
}

function carregaImagemForca() {
  switch (tentativas) {
    case 5:
      document.getElementById('imagem').style.background =
        "url('/assets/forca01.png')"
      break
    case 4:
      document.getElementById('imagem').style.background =
        "url('/assets/forca02.png')"
      break
    case 3:
      document.getElementById('imagem').style.background =
        "url('/assets/forca03.png')"
      break
    case 2:
      document.getElementById('imagem').style.background =
        "url('/assets/forca04.png')"
      break
    case 1:
      document.getElementById('imagem').style.background =
        "url('/assets/forca05.png')"
      break
    case 0:
      document.getElementById('imagem').style.background =
        "url('/assets/forca06.png')"
      break
    default:
      document.getElementById('imagem').style.background =
        "url('/assets/forca.png')"
      break
  }
}

function abreModal(titulo, mensagem) {
  let modalTitulo = document.getElementById('exampleModalLabel')
  modalTitulo.innerText = titulo

  let modalBody = document.getElementById('modalBody')
  modalBody.innerHTML = mensagem

  let reiniciarJogo = document.getElementById('reiniciar-jogo')
  reiniciarJogo.addEventListener('click', function () {
    location.reload()
  })

  $('#myModal').modal({
    show: true
  })
}

let bntReiniciar = document.querySelector('#btnreiniciar')
bntReiniciar.addEventListener('click', function () {
  location.reload()
})
