//creates a method for showing that all journeys have been created.
function hasCompletedAllJourneys(journeys, user) {
    //yes iterates through quests
    for (let i = 0; i < journeys.length; i++) { 
        const journey = journeys[i];
        // if any journey is incomplete, keep the good times rolling
        if (!user.completed[journey.id]) {
            return false;
        }
    }
    //if all journeys are completed return true
    return true;
}
export default hasCompletedAllJourneys;