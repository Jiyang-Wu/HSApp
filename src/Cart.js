import { useCardContext } from "./Shopper";
import { Link } from "react-router-dom";
const Cart = () => {
    const { cart, addOne, rmFromCart, purchase } = useCardContext();

    const cards = Object.getOwnPropertyNames(cart);
    const packs = Object.getOwnPropertyNames(purchase);
    return (
        <div className="shoppingcart">
            <div className="cartnav">
                <Link to="/">Back to main</Link>
            </div>
            <div className="incart">
                <div className="goods">
                    {cards.map((card) => {
                        return (
                            <div className="good">
                                <img src={card} alt="lala" />
                                <div className="goodinfo">
                                    <p
                                        className="change"
                                        onClick={() => {
                                            addOne(card);
                                        }}
                                    >
                                        +
                                    </p>
                                    <p>x{cart[card]}</p>
                                    <p
                                        className="change"
                                        onClick={() => {
                                            rmFromCart(card);
                                        }}
                                    >
                                        -
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="summary">
                    {packs.map((pack) => {
                        var content = Object.getOwnPropertyNames(
                            purchase[pack]
                        );

                        return (
                            <div>
                                <h3>{pack}</h3>
                                <div className="sum">
                                    {content.map((ra) => {
                                        var num = purchase[pack][ra];
                                        return (
                                            <p>
                                                {num}
                                                {ra}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default Cart;
