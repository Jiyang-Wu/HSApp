import logo from "./icon.png";
import { Link } from "react-router-dom";
import { useCardContext } from "./Shopper";
import cartpng from "./shopping-cart.png";
const Nav = () => {
    const {
        currClass,
        currRace,
        currAtk,
        currHP,
        currType,
        currCost,
        currRarity,
    } = useCardContext();
    var info = {};
    if (currClass !== "All Classes") {
        info = { ...info, Class: currClass };
    }
    if (currRace !== "All Races") {
        info = { ...info, Race: currRace };
    }
    if (currType !== "All") {
        info = { ...info, Type: currType };
    }
    if (currAtk !== -1) {
        if (currAtk === 11) {
            info = { ...info, Atk: "10+" };
        } else {
            info = { ...info, Atk: currAtk };
        }
    }
    if (currHP !== -1) {
        if (currHP === 11) {
            info = { ...info, HP: "10+" };
        } else {
            info = { ...info, HP: currHP };
        }
    }
    if (currCost !== -1) {
        if (currCost === 11) {
            info = { ...info, Cost: "10+" };
        } else {
            info = { ...info, Cost: currCost };
        }
    }
    if (currRarity !== "all") {
        info = { ...info, Rarity: currRarity };
    }
    var query = Object.getOwnPropertyNames(info);
    return (
        <div className="navbar">
            <div className="top">
                <div className="title">
                    <img src={logo} alt="" />
                    <h1>
                        HearthStone <br />
                        Shopper
                    </h1>
                </div>
                <div className="btns">
                    <Link to="/cart">
                        <div className="tocart">
                            <img
                                src={cartpng}
                                alt="lalala"
                                className="cartpng"
                            />
                        </div>
                    </Link>
                    <a className="btt" href="#top">
                        back to top
                    </a>
                </div>
            </div>
            <div className="currInfo">
                <h2>Current Filters: </h2>
                {query.map((prop) => (
                    <div className="cata">
                        <h2>{prop}: </h2>
                        <h2>{info[prop]} </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Nav;
