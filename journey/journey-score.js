function scoreJourney(choice, journeyId, user) {
    user.merit += choice.merit;
    user.wisdom += choice.wisdom;
    user.completed[journeyId] = true;
}
export default scoreJourney;
