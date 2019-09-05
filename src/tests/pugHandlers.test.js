import assert from 'assert';

import {getUniqueValuesArray} from '../handlers/arrayPugHandler';
import {getUniqueString} from '../handlers/stringPugHandler';

const initialString = 'Lorem ipsum dolor sit amet, consectetur';

const initialArray = [{name: "Piter", age: "30"}, 1, undefined, {}, 1, 6, 7, 1, 'hello', 'hello'];
const simpleOutput = [1, 6, 7];
const typeSetOutput = ['hello'];
const typeAndOrderSetOutput = [{}, {name: "Piter", age: "30"}];

const simpleOutputString = getUniqueString(initialString);
const lengthAndOrderSetString = getUniqueString(initialString, 5, true);

assert.equal( lengthAndOrderSetString.length, 5, 'should return uniqe character string with given length');
assert.equal( lengthAndOrderSetString, 'meroL', 'should return uniqe character string with given length and reversed order');
assert.equal( simpleOutputString, 'Lorem ipsudlta,cn', 'should return uniqe character string');

assert.deepEqual( getUniqueValuesArray(initialArray), simpleOutput, 'should return array of uniqe numbers');
assert.deepEqual( getUniqueValuesArray(initialArray, 'string'), typeSetOutput, 'should return array of uniqe strings');
assert.deepEqual( getUniqueValuesArray(initialArray, 'object', true), typeAndOrderSetOutput, 'should return reversed array of uniqe objects');