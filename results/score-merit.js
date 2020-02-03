function scoreMerit(merit) {
    if (merit <= 0) {
        return 'dead';
    }
    if (merit < 35) {
        return 'frail';
    }
    return 'healthy';
}

export default scoreMerit;