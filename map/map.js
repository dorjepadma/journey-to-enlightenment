

import { getUser } from '../data/api.js';
import journeys from '../data/journey-data.js';
import loadProfile from '../common/load-profile.js';
import createJourneyLink from './create-journey-link.js';
import createCompletedJourney from './create-completed-journey.js';
import hasCompletedAllJourney from './completed-all-journeys.js';
import isDead from '../common/is-dead.js';

loadProfile(); // i predict we'll load the header on every page but the home page

// go grab the user from localStorage
const user = getUser;

// if they're dead, or if they've completed all the quests
if (isDead(user) || hasCompletedAllJourney(journeys, user)) {
    // send them to the results page
    window.location = '../results';
}
// getting some quest element from DOM
const nav = document.getElementById('journeys');

for (let i = 0; i < journeys.length; i++) {
    // for every quest
    const journey = journeys[i];
    let journeyDisplay = null;

    // if the user has completed it
    if (user.completed[journey.id]) {
        // make a completed quest display (with a check mark)
        journeyDisplay = createCompletedJourney(journey);
    }
    else {
        // otherwiese, make a link to the quest
        journeyDisplay = createJourneyLink(journey);
    }
    nav.appendChild(journeyDisplay); // add the quest display to the nav
}

