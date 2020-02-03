  
import loadProfile from '../common/load-profile.js';
import { getUser } from '../data/api.js';
import scoreMerit from './score-merit.js';
import scoreWisdom from './score-wisdom.js';
import { meritMessages, aliveWisdomMessages, deadWisdomMessages } from './messages.js';

loadProfile();

const user = getUser();

const storyDisplay = document.getElementById('story-display');

const meritResult = scoreMerit(user.merit); // frail, dead, or healthy
const wisdomResult = scoreWisdom(user.wisdom);
const meritMessage = meritMessages[meritResult];

let wisdomMessages = null;
if (meritResult === 'dead') {
    wisdomMessages = deadWisdomMessages;
}
else {
    wisdomMessages = aliveWisdomMessages;
}

const wisdomMessage = wisdomMessages[wisdomResult];

let story = 'After your adventures, ';
story += user.name + ' the ' + user.incarnation + ',';
story += meritMessage + ' and ' + wisdomMessage + '.';

storyDisplay.textContent = story;