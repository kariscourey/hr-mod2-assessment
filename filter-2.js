function filterBetween(values, lower, upper) {
    return values.filter(value => value <= upper && value >= lower);
}

// val = ["a", "d", "z"]
// up = "c"
// low = "z"
val = [1, 10, 20]
low = 10
up = 20
console.log(filterBetween(val,low,up))
