// choice function to create the journey
function createChoice(choice) {
    const label = document.createElement('label');
    label.classList.add('choice');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.required = true;
    radio.value = choice.id;
    label.appendChild(radio);
// appends to journeys
    const description = document.getElementById('span');
    description.textContent = choice.description;
    label.appendChild(description);

    return label;
}

export default createChoice;