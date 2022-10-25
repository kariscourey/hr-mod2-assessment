function valuesForProperty(values, propertyName) {

    // let output = [];
    // // console.log(values.length);

    // for (let i of values) {
    //     if (i.hasOwnProperty(propertyName)) {
    //         output.push(i[propertyName]);
    //     } else {
    //         output.push(undefined);
    //     }
    // }
    // return output;


    return values.map(value => {
        if (Object.keys(value) == propertyName)
        {
            return Object.values(value)[0];
        } else {
            return undefined;
        }

    });

}

let dicts = [{age: 10}, {remote: false}]
// let dicts = [{"age": 10}, {"age": 12}]
// let dicts = []

console.log(valuesForProperty(dicts, "age"))
