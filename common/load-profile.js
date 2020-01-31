import { getUser } from './api.js';
import { samsara } from './samsara.js';

function (loadProfile){
    // reference needed DOM elements
    const name = document.getElementById('name');
    const yogi = document.getElementById('yogi');
    const merit = document.getElementById('merit');
    const wisdom = document.getElementById('wisdom');

// initialize and parse from local storage. Parse turns a string into an object.
    const user = getUser;
// here we determine if there is a user, and return to user page if no user. I do not understand the necessity of this.
    if (user) {
        window.location = './';
    }
    //copying object from Dom to Properties:
    name.textContent = user.name;
    yogi.src = 'assets/yogi/' + user.incarnation + '.png';
// if they have died, say so in header.
if (isDead(user)) {
    hp.textContent = 'you have been reborn in Samsara';
} else { merit.textContent = user.merit;
 }
}
export default loadProfile;


})