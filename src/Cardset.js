import { useCardContext } from "./Shopper";
import { useState } from "react";

const Cardset = () => {
    const cardset = useCardContext();
    const cardlist = cardset.currCards;
    const { addToCart } = useCardContext();
    const [show, setShow] = useState(false);

    return (
        <div className="cards">
            {cardlist.map((card) => {
                if (
                    !(
                        card.cardSet === "Hero Skins" ||
                        (card.cardSet === "Basic" && card.type === "Hero")
                    )
                ) {
                    return (
                        <div className="card" onClick={() => addToCart(card)}>
                            <img src={card.img} alt={card.name} />
                        </div>
                    );
                }
            })}
        </div>
    );
};
export default Cardset;
