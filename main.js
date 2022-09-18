//Variáveis
const screen1 = document.querySelector('.screen1')
const buttons = document.querySelectorAll('button')
const h1s = document.querySelectorAll('h1')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
  if(e.key == "Enter") {
    handleResetClick()
  }
})

//callback functions
function handleTryClick() {
  event.preventDefault() //não faça o padrão (não envie um form)

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide")
    buttons[1].classList.remove("hide")
    h1s[1].classList.remove('hide')

    document.querySelector(".textFinal").innerText = `Acertou em ${xAttempts} tentativas`

    console.log(`Parabéns!o número que eu pensei foi ${randomNumber} Você advinhou o número em ${xAttempts} tentativas`)
  }
  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  screen1.classList.remove("hide")
  buttons[1].classList.add("hide")
  h1s[1].classList.add('hide')
  xAttempts = 1
}
