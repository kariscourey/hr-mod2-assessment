function propertyInObject(values, propertyName) {

    return values.map(x => {
        return (x[propertyName] !== undefined)
    });

}

// let dicts = [{age: 10}, {remote: false}]
// let dicts = [{"age": 10}, {"age": 12}]
let dicts = []

console.log(propertyInObject(dicts, "age"))
