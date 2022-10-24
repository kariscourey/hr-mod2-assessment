function hasProperty(jsonString, propertyName) {
    const j_obj = JSON.parse(jsonString);
    // return j_obj.hasOwnProperty(propertyName);
    return propertyName in j_obj;


    // for instructors:
    // which of the above is preferred?
}


let string = '{"name": "Noor"}'
console.log(hasProperty(string, "name"))
