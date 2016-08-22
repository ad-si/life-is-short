const birthdayInput = document.getElementById('birthday')
const yearsContainer = document.getElementById('years')
const yearsInALife = 90
const weeksPerYear = 52

function renderWeeks (options) {
  yearsContainer.innerHTML = ''

  for (let year = 1; year <= yearsInALife; year++) {
    const yearElement = document.createElement('div')
    yearElement.classList.add('year')

    const indexElement = document.createElement('div')
    indexElement.classList.add('index')
    indexElement.textContent = year

    yearElement.appendChild(indexElement)
    yearsContainer.appendChild(yearElement)

    for (let week = 1; week <= weeksPerYear; week++) {
      const weekNumber = ((year - 1) * weeksPerYear) + week
      const weekElement = document.createElement('div')

      weekElement.classList.add('week')
      if (weekNumber < options.spentWeeks) {
        weekElement.classList.add('spent')
      }
      weekElement.id = `week-${weekNumber}`
      weekElement.title = `year: ${year}\nweek: ${week}`
      yearElement.appendChild(weekElement)
    }
  }
}

function renderSpentWeeks () {
  const birthday = new Date(birthdayInput.value)
  const now = new Date()
  const daysPerWeek = 7
  const hoursPerDay = 24
  const minutesPerHour = 60
  const millisecondsPerMinute = 60000
  const ageInWeeks = (now - birthday) /
    daysPerWeek / hoursPerDay / minutesPerHour / millisecondsPerMinute

  renderWeeks({spentWeeks: ageInWeeks})
}

birthdayInput.addEventListener('input', renderSpentWeeks)

renderSpentWeeks()
