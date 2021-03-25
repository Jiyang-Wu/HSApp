import React, { useReducer, useContext, useEffect } from "react";
import { reducer } from "./reducer";
const cardset = {
    cards: [],
    currCards: [],
    isLoading: false,
    currClass: "All Classes",
    currType: "All",
    currRace: "All Races",
    currAtk: -1,
    currHP: -1,
    currCost: -1,
    currRarity: "all",
};
const api = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards";
const CardContext = React.createContext();

const Shopper = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, cardset);

    const fetchData = async (url) => {
        dispatch({ type: "LOADING" });
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "x-rapidapi-key":
                        "8d1b506e85msh3be41d90ea597f1p10ba3cjsne755d463810c",
                    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                },
            });
            const data = await response.json();
            dispatch({
                type: "READ_CARD",
                payload: { cards: data },
            });
            dispatch({ type: "COLLECT" });
        } catch (error) {
            console.log(error);
        }
    };
    const queryClass = (classNames) => {
        dispatch({ type: "CLASS", payload: { class: classNames } });
        dispatch({ type: "COLLECT" });
    };
    const queryRace = (raceName) => {
        dispatch({ type: "RACE", payload: { race: raceName } });
        dispatch({ type: "COLLECT" });
    };
    const queryType = (typeName) => {
        dispatch({ type: "TYPE", payload: { type: typeName } });
        dispatch({ type: "COLLECT" });
    };
    const queryAtk = (atk) => {
        dispatch({ type: "ATK", payload: { Atk: atk } });
        dispatch({ type: "COLLECT" });
    };
    const queryHP = (hp) => {
        dispatch({ type: "HP", payload: { HP: hp } });
        dispatch({ type: "COLLECT" });
    };
    const queryCost = (cost) => {
        dispatch({ type: "COST", payload: { cost: cost } });
        dispatch({ type: "COLLECT" });
    };
    const queryRarity = (rarity) => {
        dispatch({ type: "RARITY", payload: { rarity: rarity } });
        dispatch({ type: "COLLECT" });
    };
    const clearAll = () => {
        dispatch({ type: "CLEAR" });
        dispatch({ type: "COLLECT" });
    };

    useEffect(() => {
        fetchData(`${api}?collectible=1`);
    }, []);
    return (
        <CardContext.Provider
            value={{
                ...state,
                queryClass,
                queryRace,
                queryType,
                queryAtk,
                queryHP,
                queryCost,
                queryRarity,
                clearAll,
            }}
        >
            {children}
        </CardContext.Provider>
    );
};

export { Shopper, CardContext };
export const useCardContext = () => {
    return useContext(CardContext);
};
