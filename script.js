alertify.set('notifier', 'position', 'top-right')

const form = document.getElementById('form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alertify.error('Dia já adicionado &#128531;')
    return
  }

  nlwSetup.addDay(today)
  alertify.success('Dia adicionado com sucesso &#9989;')
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}

nlwSetup.setData(data)
nlwSetup.load()