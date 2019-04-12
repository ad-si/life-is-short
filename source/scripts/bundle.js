(function () {
  'use strict';

  const yearsContainer = document.getElementById('years');
  const yearsInALife = 90;
  const weeksPerYear = 52;
  const milestones = [
    {
      title: 'Early Years',
      from: 0,
    },
    {
      title: 'School',
      from: 6,
    },
    {
      title: 'University',
      from: 18,
    },
    {
      title: 'Career',
      from: 23,
    },
    {
      title: 'Retirement',
      from: 67,
    },
  ];

  function renderWeeks (options) {
    yearsContainer.innerHTML = '';

    for (let year = 0; year < yearsInALife; year++) {

      const currentMilestone = milestones
        .find(milestone => milestone.from === year);

      if (currentMilestone) {
        const milestoneElement = document.createElement('div');
        milestoneElement.classList.add('milestone');
        milestoneElement.textContent = currentMilestone.title;
        yearsContainer.appendChild(milestoneElement);
      }

      const yearElement = document.createElement('div');
      yearElement.classList.add('year');

      const indexElement = document.createElement('div');
      indexElement.classList.add('index');
      indexElement.textContent = year;

      yearElement.appendChild(indexElement);
      yearsContainer.appendChild(yearElement);

      for (let week = 1; week <= weeksPerYear; week++) {
        const weekNumber = (year * weeksPerYear) + week;
        const weekElement = document.createElement('div');

        weekElement.classList.add('week');
        if (weekNumber < options.spentWeeks) {
          weekElement.classList.add('spent');
        }
        weekElement.id = `week-${weekNumber}`;
        weekElement.title = `year: ${year}\nweek: ${week}`;
        yearElement.appendChild(weekElement);
      }
    }
  }

  function renderSpentWeeks (birthday) {
    const now = new Date();
    const daysPerWeek = 7;
    const hoursPerDay = 24;
    const minutesPerHour = 60;
    const millisecondsPerMinute = 60000;
    const ageInWeeks = (now - birthday) /
      daysPerWeek / hoursPerDay / minutesPerHour / millisecondsPerMinute;

    renderWeeks({spentWeeks: ageInWeeks});
  }

  const birthdayInput = document.getElementById('birthday');

  birthdayInput.addEventListener('input', () => {
    const birthday = new Date(birthdayInput.value);
    renderSpentWeeks(birthday);
  });

  const birthday = new Date(birthdayInput.value);
  renderSpentWeeks(birthday);

}());
