//accumulating merit and wisdom
const retreat = {
    id: 'retreat',
    title: 'Mountain Retreat',
    map: {
        top:'10%',
        left:'60%',
    },
    image: 'yogi.jpg',
    audio: 'mountain.wav',
    description:
        `At an auspicious time you enter retreat in a pleasant mountain location. Full of enthusiasm you vow not to leave your mountain retreat until you attain the heart of enlightenment. During your 2nd year a terrifying apparition of a demon appears before you...`,
    Choices :[{
        id: 'meditate',
        description: 'stay on your cushion',
        result: 'following your Gurus secret instructions, you take all mental apportions as illusions and maintain your meditation with diligence. You successfully complete your three year retreat and become a guru.',
        merit: +30,
        wisdom:+30,

    }, { id: 'mantra',
        description: 'you recite mantra',
        result: 'You recite wrathful mantra and perform exorcism magic, the apparition comes under you control and you become a powerful sorcerer',
        merit: +10,
        wisdom:+10 },

    { id: 'go home',
        description: 'You did not come here for demons',
        result: 'You are here to meditate, not deal with demons, it would be much better at home rather than in these mountains. You pack up and go home, ending your retreat early',
        merit: -25,
        wisdom:-25 }]   
};
//accumulating merit and wisdom
const monastery = {
    id: 'monastery',
    title: 'join the monastery',
    map: {
        top:'30',
        right:'60%',
    },
    image: '../assets/journey/monks monlam.jpg',
    audio: '../assets/journey/tibetanchant.wav',
    description:
        `You have joined a monastery to accumulate merit and wisdom and study at the feet of a great master. You have become skilled in the 9 sciences and are considered an outstanding teacher of young monks. One night Mara appears to you and offers you a choice between breaking your vows by eating meat, drinking alcohol, or enjoying sexual pleasure with a villager. You choose....`,
    Choices :[{
        id: 'eat meat',
        description: 'you enjoy some tasty meat',
        result: 'you enjoy some tasty meat, while breaking your vow of veganism, you pray deeply for the animal, and help guide its spirit to a pure realm.',
        merit: +30,
        wisdom:+5,

    }, { id: 'bring on the sexual pleasure!',
        description: 'you take a beautiful villager as a consort',
        result: 'Engaging in secret practices, you take a a consort and develop great bliss and wisdom with the warmth of sensual pleasure. You both experience sublime joy.',
        merit: +30,
        wisdom:+40 },

    { id: 'drink alcohol',
        description: 'Break out the whiskey lets have fun!',
        result: 'You get wildly drunk, kill a yak and eat it, then sleep with several villagers. Remembering nothing of it in the morning you are ejected from the Monastery, and are send home to your family.',
        merit: -25,
        wisdom:-25 }]
    
};
//accumulating merit and wisdom
const householder = {
    id: 'householder',
    title: 'practice secretly as a householder',
    map: {
        bottom:'50%',
        right:'60%',
    },
    image: './assets/journey/dudjom_dilgo.jpg',
    audio: 'children.wav',
    description:
        `Having received your Gurus pith heart instructions, you go off into the world, raise a family, and practice view, meditation, and conduct. You are emulating the path of the great Mahasiddhas of the path, and no one knows your are secretly a practitioner of the great Yogas.`,
    Choices :[{
        id: 'practice',
        description: 'get up at 4am and practice every day',
        result: 'With diligence you spend 3 hours a morning practicing before attending to your family and duties of the day. Children\'s cries are mantra, angry clients are the deity, and rampant emotions are wisdom.',
        merit: +30,
        wisdom:+30,

    }, { id: 'view',
        description: 'you all phenomena as wisdom mind',
        result: 'You maintain the natural view through the day. All phenomena arises inseparably from the basic space of your awareness.',
        merit: +90,
        wisdom:+90 },

    { id: 'The kids are too much, maybe you should go back to the monastery or retreat',
        description: 'The kids are crying, your partner is bitching, there is never enough money.',
        result: 'Yes, all that training was nice, but this is the real world. You are too busy trying to get by to practice and slowly over time, you forget to apply what you have learned, you become the lowest of the low, a common householder',
        merit: -25,
        wisdom:-25 }]
    
};
const journeys = [
    retreat,
    monastery,
    householder,
];

export default journeys;