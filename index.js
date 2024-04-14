let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names){
    let randomNumber = names.length;
    let randomPositionPeople = Math.floor(Math.random() * randomNumber);
    let randomPeople = names[randomPositionPeople];

    return randomPeople + "is going to buy lunch today!";
}
whosPaying(names);