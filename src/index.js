// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (prop) => {
    return prop;
};

const createNotEnumerableProperty = (prop) => {
    Object.defineProperty(Object.prototype, prop, {
        enumerable: false,
        value: 'value'
    });
    return prop;
};

const createProtoMagicObject = () => {
    let func = new Function();
    func.prototype = Function.prototype;
    return func;
};

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

const createIncrementer = () => {
    function *iterator(n = 100) {
        for(let i = 1; i < n; i++) {
            yield i;
        }
    }
    return iterator();
};

const returnBackInSecond = (arg) => {
    return new Promise( (resolve, regect) => {
        setTimeout(function() {
            return resolve(arg);
        }, 1200)
    })
};

const getDeepPropertiesCount = (obj) => {
    let count = 0;
    function countDeep(obj) {
        for(let key in obj) {
            if( typeof(obj[key]) === 'object'){
                countDeep(obj[key]);
            }
            count++;
        }
        return count;
    }

    return countDeep(obj);
};

const createSerializedObject = () => {
    return null;
};

const toBuffer = () => {};

const sortByProto = (arr) => {
    return arr.map( item => item.__proto__).sort( (a,b) => a-b);
};

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