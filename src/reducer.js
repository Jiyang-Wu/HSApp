const reducer = (state, action) => {
    switch (action.type) {
        case "READ_CARD":
            const cards = action.payload.cards;
            var cardlist = [];
            if (!Array.isArray(cards)) {
                const allcard = Object.getOwnPropertyNames(cards);
                for (var key in allcard) {
                    var prop = allcard[key];
                    cardlist = [...cardlist, ...cards[prop]];
                }
            } else {
                cardlist = cards.filter((card) => card.collectible === true);
            }
            return {
                ...state,
                cards: cardlist,
                isLoading: false,
            };
        case "COLLECT":
            var newstate = [...state.cards];
            if (state.currClass !== "All Classes") {
                newstate = newstate.filter(
                    (card) => card.playerClass === state.currClass
                );
            }
            if (state.currType !== "All") {
                newstate = newstate.filter(
                    (card) => card.type === state.currType
                );
            }
            if (state.currRace !== "All Races") {
                newstate = newstate.filter(
                    (card) => card.race === state.currRace
                );
            }
            if (state.currHP !== -1) {
                if (state.currHP === 9) {
                    newstate = newstate.filter(
                        (card) => card.type === "Minion" && card.health > 8
                    );
                } else {
                    newstate = newstate.filter(
                        (card) =>
                            card.type === "Minion" &&
                            card.health === state.currHP
                    );
                }
            }
            if (state.currAtk !== -1) {
                if (state.currAtk === 8) {
                    newstate = newstate.filter(
                        (card) => card.type === "Minion" && card.attack > 7
                    );
                } else {
                    newstate = newstate.filter(
                        (card) =>
                            card.attack === state.currAtk &&
                            card.type === "Minion"
                    );
                }
            }
            if (state.currCost !== -1) {
                if (state.currCost === 9) {
                    newstate = newstate.filter((card) => card.cost > 8);
                } else {
                    newstate = newstate.filter(
                        (card) => card.cost === state.currCost
                    );
                }
            }
            if (state.currRarity !== "all") {
                newstate = newstate.filter(
                    (card) => card.rarity === state.currRarity
                );
            }
            return { ...state, currCards: newstate };
        case "CLASS":
            return { ...state, currClass: action.payload.class };
        case "RACE":
            return { ...state, currRace: action.payload.race };
        case "TYPE":
            return { ...state, currType: action.payload.type };
        case "ATK":
            return { ...state, currAtk: action.payload.Atk };
        case "HP":
            return { ...state, currHP: action.payload.HP };
        case "COST":
            return { ...state, currCost: action.payload.cost };
        case "RARITY":
            return { ...state, currRarity: action.payload.rarity };
        case "LOADING":
            return { ...state, isLoading: true };
        case "CLEAR":
            return {
                ...state,
                currClass: "All Classes",
                currRace: "All Races",
                currType: "All",
                currAtk: -1,
                currHP: -1,
                currCost: -1,
                currRarity: "all",
            };
        case "ADD":
            const cardpic = action.payload.c.img;
            const meta = action.payload.c.cardSet;
            const rarity = action.payload.c.rarity;
            var newpurchase = { ...state.purchase };
            if (newpurchase.hasOwnProperty(meta)) {
                var newmeta = { ...newpurchase[meta] };
                if (newmeta.hasOwnProperty(rarity)) {
                    newmeta = { ...newmeta, [rarity]: newmeta[rarity] + 1 };
                } else {
                    newmeta = { ...newmeta, [rarity]: 1 };
                }
                newpurchase = { ...newpurchase, [meta]: newmeta };
            } else {
                var newmeta = {};
                newmeta = { ...newmeta, [rarity]: 1 };
                newpurchase = { ...newpurchase, [meta]: newmeta };
            }
            console.log(newpurchase);
            var newscart = { ...state.cart };
            if (
                state.cart[cardpic] === 1 &&
                action.payload.c.rarity !== "Legendary"
            ) {
                newscart = { ...state.cart, [cardpic]: 2 };
            } else if (state.cart[cardpic] !== 2) {
                newscart = { ...state.cart, [cardpic]: 1 };
            }

            return { ...state, cart: newscart, purchase: newpurchase };
        case "+1":
            const picid = action.payload.img;
            var isLegendary = false;
            state.cards.map((card) => {
                if (card.img === picid) {
                    isLegendary = card.rarity === "Legendary";
                }
            });

            var newscart = { ...state.cart };

            if (state.cart[action.payload.img] === 1 && !isLegendary) {
                newscart = { ...newscart, [action.payload.img]: 2 };
            }

            return { ...state, cart: newscart };
        case "-1":
            var newscart = { ...state.cart };
            const pic = action.payload.img;
            if (newscart[pic] === 2) {
                newscart = { ...newscart, [pic]: 1 };
            } else {
                delete newscart[pic];
            }
            return { ...state, cart: newscart };
    }
};
export { reducer };
