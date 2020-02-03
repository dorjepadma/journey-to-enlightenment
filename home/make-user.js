//build a JS user out of form data. This is interesting!
//first make user
function makeUser(formData) {
    const user = {
        name: formData.get ('name'),
        incarnation: formData.get ('incarnation'),
        merit: 50,
        wisdom: 0,
        //what does completed do?
        completed: {}
    };
    return user;
}

export const newMakeUser = (formData) => ({
    name: formData.get('incarnation'),
    yogi: formData.get('incarnation'),
    merit: 50,
    wisdom: 0,
    completed: {}
});
export default makeUser;