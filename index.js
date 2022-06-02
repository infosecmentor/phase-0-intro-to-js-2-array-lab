// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const cats2 = [...cats, "Broom"];

const cats3 = ["Arnold", ...cats];

const cats4 = [...cats];
cats4.pop();

const cats5 = [...cats];
cats5.shift();

function destructivelyAppendCat(name) {
    cats.push("Ralph");

}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    return cats2;
}

function prependCat(name) {
    return cats3;
}

function removeLastCat() {
    return cats4;
}

function removeFirstCat() {
    return cats5;
}