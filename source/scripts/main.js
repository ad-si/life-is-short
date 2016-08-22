import renderSpentWeeks from './renderSpentWeeks'

const birthdayInput = document.getElementById('birthday')

birthdayInput.addEventListener('input', () => {
  const birthday = new Date(birthdayInput.value)
  renderSpentWeeks(birthday)
})

const birthday = new Date(birthdayInput.value)
renderSpentWeeks(birthday)
