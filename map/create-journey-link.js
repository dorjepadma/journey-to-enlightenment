//we need a link to journey on the browser

function createJourneyLink(journey) {
    const link = document.createElement('a');
    link.classListAdd('journey');

    link.href = '../journey/?id' + journey.id;
    link.style.top = journey.map.top;
    link.style.left = journey.map.left;
    link.textContent = journey.title;

    return link;
}
export default createJourneyLink;