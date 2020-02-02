//load all global journey data
import loadProfile from '../common/load-profile.js';
import { getUser, saveUser } from '../data/api.js';
import journeys from '../data/journey-data.js';
import createChoice from './create-choice.js';
import findById from '../common/find-by-id.js';
import scoreJourney from './journey-score.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);
const journeyId = searchParams.get('id');
const journeys = findById(journeys, journeyId);
//if there is no such quest (why do we need this?)
if (!journey) {
    window.location = '../map';
}
const title = document.getElementById('title');
const image = document.getElementById('image');
const audio = document.getElementById('audio');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');
// use the journey to populate the DOM
title.textContent = journey.title;
image.src = '../assets/journey/' + journey.image;
audio.src = '../assets/journey/' + journey.audio;
description.textContent = journey.description;

// for each of the Journeys choices
for (let index = 0; index < journey.choices.length; index++) {
    const choice = journey.choices[index]; 
    const choiceDOM = createChoice(choice);
    choices.appendChild(choiceDOM);
}

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    const choice = findById(journey.choices, choiceId);

    const user = getUser();
    scoreJourney(choice, journey.id, user);
    saveUser(user);

    audio.src = '../assets/journey/' + journey.action;
    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;
    loadProfile();
});
