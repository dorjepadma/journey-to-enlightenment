// sorts the index to find the quests by ID.
function findById(array, id) {
    for (let index = 0; index < array.length; index++) {
       
        const item = array [index];
        if (item.id === id) {
            return item;
        }
    }
//?why does this return null?
    return null;
}
export default findById; 