function simpleSearch(values, searchTerm) {
    return values.includes(searchTerm);
}

val = [1, 2, 3, 100, 200, 300];
// term = 10;
term = 100;

console.log(simpleSearch(val,term));
