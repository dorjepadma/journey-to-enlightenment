function scoreWisdom(wisdom) {
    if (wisdom === 0) {
        return 'poor';   
    }
    else if (wisdom < 50) {
        return 'modest';   
    }
    return 'rich';
}

export default scoreWisdom;