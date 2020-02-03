import { saveUser } from '../data/api.js';
import makeUser from './make-user.js';

// grab the form from main index.html 
const userSignUp = document.getElementById('user-sign-up');


//on submission 
userSignUp.addEventListener('submit', function(event)
{
    event.preventDefault();

    const formData = new FormData(userSignUp); 
    const user = makeUser(formData);
    saveUser(user);
    window.location = 'map';
});

