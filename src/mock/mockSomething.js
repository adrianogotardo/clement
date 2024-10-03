import { creatureCardExample } from "./cardExample";

export default function mockSomething(key, amount) {
    let mockedThing = [];
    if(amount > 0) {
        for(let i = 1; i <= amount; i++) {
            if(key === 'card') {
                mockedThing.push(creatureCardExample);
            } else if(key === 'deck') {
                mockedThing.push({
                    title: `Deck ${amount}`,
                    cover: creatureCardExample.image_uris.art_crop,
                    mainDeck: mockSomething('card', 60),
                    sideDeck: mockSomething('card', 15)
                });
            };
        };
    };
    return mockedThing;
};
