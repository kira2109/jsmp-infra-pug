import _ from 'lodash';

function getUniqueValuesArray (array, type = 'number', reverse = false) {
    const set = new Set(array);
    const uniqueValuesArray = [...set];

    const uniqueValuesFilteredByType = _.filter(uniqueValuesArray, item => {
        return typeof(item) === type;
    });

    if (uniqueValuesFilteredByType && reverse) {
        const reversedArray = uniqueValuesFilteredByType.reverse();
        return reversedArray;
    }

    return uniqueValuesFilteredByType;
}

export { getUniqueValuesArray };