// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = () => {};
const createProtoMagicObject = () => {};
const incrementor = () => {
    incrementor.count = incrementor.count ? incrementor.count : 1;
    function counter() {
        incrementor.count++;
        return counter;
    }

    counter.valueOf = function() {
        return incrementor.count++;
    }
    return counter;
};
const asyncIncrementor = () => {
    asyncIncrementor.count = asyncIncrementor.count ? asyncIncrementor.count : 0;
    return new Promise( (resolve, regect) => {
        asyncIncrementor.count++;
        return resolve(asyncIncrementor.count);
    })
};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;