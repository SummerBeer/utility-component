function add(a, b) {
    var x, y
    if (typeof a != "number" || typeof b != "number") {
        x = parseFloat(a)
        y = parseFloat(b)
    }
    return (x + y).toFixed(2)
}