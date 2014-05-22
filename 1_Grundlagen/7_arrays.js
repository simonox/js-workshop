// Array-Literal
var planets = ["Merkur", "Venus", "Erde", "Mars"];

// ein Array laesst sich nicht erkennen
//console.log(typeof planets); // object

/**
 * Prueft, ob ein Wert ein Array ist.
 */
function isArray(value) {
    return (value && // value ist defined
        typeof value === "object" && // value ist ein Objekt
        value.constructor === Array) // Konstruktor ist Array
}

//console.log(isArray(["eins", "zwei", "drei"])); // true
//console.log(isArray("Hello")); // false

/**
 * Wandelt array-aehnliche Werte in ein Array.
 * @autor John Resig
 */
function toArray(value) {
    return Array().slice.call(value, 0);
}

console.log(toArray("Hello")); // H,e,l,l,o
console.log(toArray(47)); // empty
console.log(toArray(["eins", "zwei", "drei"])); //
