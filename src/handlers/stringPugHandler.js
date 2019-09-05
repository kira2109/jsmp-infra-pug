function getUniqueString (string, length = string.length, reverse = false) {
    const set = new Set(string);
    const uniqueCharacters = [...set];

    uniqueCharacters.length = length;

    if (reverse) {
        uniqueCharacters.reverse();
    }

    const uniqueString = uniqueCharacters.join('');

    return uniqueString;
}

export { getUniqueString };