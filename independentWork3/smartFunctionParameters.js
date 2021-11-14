let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
    };

function showMenu({title = "Untitled", width = 200, height = 100, items =
[]}) {

alert( `${title} ${width} ${height}` );
alert( items );
}
showMenu(options);

let fruits = {
    title: "Fruits",
    items: ['apple', 'banana', 'peach'],
    orange : 5,
    pineapple : 4
};

function showFruit({title = "Untitled", weight = 200, height = 100, items = []}) {

alert( `${title} ${weight} ${height}` );
alert( items );
}
showMenu(options);