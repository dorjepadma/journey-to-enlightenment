//api is an application protocol system that allows different pages to communicate with one another. Here the api is keeping track of the users progress in local state. 
//thus we are popping the user into local storage
export function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

export function getUser() {
    const json = localStorage.getItem(user);
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}

// how is this getting the data for the function? oh, it operates as the function.
export default getUser;