obj = {
    x: 10, 
    y: 20, 
    inner: { 
        x: 20, 
        z: 30 }, 
    foo2: { 
        k: 23, 
        p: 13,
        o: {
            or: 17,
            }
        } 
};

function convert(obj) {
    let clone = {};
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
            Object.assign(clone, convert(obj[key]));
        } else {
            clone[key] = obj[key];
        }
    }
    return clone;
};

let newObj = convert(obj);
console.log(newObj);