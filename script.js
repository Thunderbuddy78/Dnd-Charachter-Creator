// Populate race and class options
const races = ['Human', 'Elf', 'Dwarf', 'Gnome', 'Half-Elf', 'Half-Orc', 'Halfling'];
const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];

const raceSelect = document.getElementById('race');
const classSelect = document.getElementById('class');

races.forEach(race => {
  const option = document.createElement('option');
  option.value = race;
  option.innerText = race;
  raceSelect.appendChild(option);
});

classes.forEach(classType => {
    const option = document.createElement('option');
    option.value = classType;
    option.innerText = classType;
    classSelect.appendChild(option);
  });
  
  // Generate stat input fields
  const statNames = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
  const statsDiv = document.getElementById('stats');
  
  statNames.forEach(stat => {
    const inputGroup = document.createElement('div');
    inputGroup.classList.add('input-group');
  
    const label = document.createElement('label');
    label.setAttribute('for', stat.toLowerCase());
    label.innerText = stat;
  
    const input = document.createElement('input');
    input.type = 'number';
    input.min = 1;
    input.max = 20;
    input.id = stat.toLowerCase();
    input.required = true;
  
    inputGroup.appendChild(label);
    inputGroup.appendChild(input);
    statsDiv.appendChild(inputGroup);
  });
  
  // Generate skill checkboxes
  const skills = ['Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival'];
  const skillsDiv = document.getElementById('skills');
  
  skills.forEach(skill => {
    const inputGroup = document.createElement('div');
    inputGroup.classList.add('input-group');
  
    const label = document.createElement('label');
    label.setAttribute('for', skill.toLowerCase());
    label.innerText = skill;
  
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = skill.toLowerCase();
  
    inputGroup.appendChild(input);
    inputGroup.appendChild(label);
    skillsDiv.appendChild(inputGroup);
  });
  
  // Handle character creation
  document.getElementById('create-character').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const race = raceSelect.value;
    const classType = classSelect.value;
    const backstory = document.getElementById('backstory').value;
  
    const stats = {};
    statNames.forEach(stat => {
      stats[stat] = Number(document.getElementById(stat.toLowerCase()).value);
    });
  
    const characterSkills = [];
    skills.forEach(skill => {
      const checkBox = document.getElementById(skill.toLowerCase());
      if (checkBox.checked) {
        characterSkills.push(skill);
      }
    });
  
    const character = {
      name,
      race,
      class: classType,
      stats,
      skills: characterSkills,
      backstory
    };
  
    // Do something with the created character, e.g., save it, display it, etc.
    console.log(character);
  });
  