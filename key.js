function keyForValue(jsonString, propertyValue) {
    const j_obj = JSON.parse(jsonString);
    if (Object.keys(j_obj).find(key => j_obj[key] === propertyValue)) {
        return Object.keys(j_obj).find(key => j_obj[key] === propertyValue);
    } else {
        return null;
    }

}

value = '{"name": "Noor"}'
value = '{"age": 23}'
val = "Noor"

console.log(keyForValue(value,val));
