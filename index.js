const cats = ["Milo", "Otis", "Garfield"];

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyRemoveLastCat() {
    cats.pop('Garfield');
}

function destructivelyRemoveFirstCat() {
    cats.shift('Milo');
}

function appendCat(name) {
    return [...cats, 'Broom'];
}

function prependCat(name) {
    return ['Arnold', ...cats];
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
    return cats.slice(1);
}