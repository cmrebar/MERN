class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        for (const suit of suits) {
            for (const face of faces) {
                deck.push(this.createCard(suit, face));
            }
        }
        this.deck = deck;
    }
    createCard(suit, face) {
        return face + " of " + suit;
    }
}

let x = new Deck();
let keyword = 'Heart'
x.deck.sort((a,b) => {
    let aIndex = a.indexOf(keyword);
    let bIndex = b.indexOf(keyword);
    if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex
    } else if (aIndex !==-1) {
        return -1
    } else if (bIndex !== -1) {
        return 1
    } else {
        return a.localeCompare(b);
    }
});
console.log(x.deck);


