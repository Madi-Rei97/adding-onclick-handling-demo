const state = {
  octopusCount: 0,
};

const addOctopus = () => {
  const newOctopus = document.createElement('span');
  const octopusContainer = document.querySelector('#octopusContainer');
  newOctopus.textContent = '🐙';
  octopusContainer.appendChild(newOctopus);

  state.octopusCount += 1;
  const octopusCountContainer = document.querySelector('#octopusCount');
  octopusCountContainer.textContent = `Octopus Count: ${state.octopusCount}`;
};

const registerEventHandlers = () => {
  const octopusButton = document.querySelector('#addOctopusButton');
  octopusButton.addEventListener('click', addOctopus);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);