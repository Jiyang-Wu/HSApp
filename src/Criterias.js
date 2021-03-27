import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { useCardContext } from "./Shopper";

const Criterias = () => {
    const {
        queryClass,
        queryRace,
        queryType,
        queryAtk,
        queryHP,
        queryCost,
        queryRarity,
        clearAll,
    } = useCardContext();
    return (
        <div className="searching">
            <DropdownButton
                key="Warning"
                id="dropdown-variants-Warning"
                variant="warning"
                title="Select Class"
            >
                <Dropdown.Item onClick={() => queryClass("All Classes")}>
                    All Classes
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryClass("Hunter")}>
                    Hunter
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryClass("Priest")}>
                    Priest
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryClass("Warlock")}>
                    Warlock
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryClass("Mage")}>
                    Mage
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryClass("Warrior")}>
                    Warrior
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryClass("Rogue")}>
                    Rogue
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryClass("Shaman")}>
                    Shaman
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryClass("Druid")}>
                    Druid
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryClass("Paladin")}>
                    Paladin
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryClass("Demon Hunter")}>
                    Demon Hunter
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryClass("Neutral")}>
                    Neutral
                </Dropdown.Item>
            </DropdownButton>

            <DropdownButton
                key="Warning"
                id="dropdown-variants-Warning"
                variant="warning"
                title="Select Race"
            >
                <Dropdown.Item onClick={() => queryRace("All Races")}>
                    All Races
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryRace("Beast")}>
                    Beast
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryRace("Dragon")}>
                    Dragon
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryRace("Murloc")}>
                    Murloc
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryRace("Pirate")}>
                    Pirate
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryRace("Totem")}>
                    Totem
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryRace("Mech")}>
                    Mech
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryRace("Elemental")}>
                    Elemental
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryRace("Demon")}>
                    Demon
                </Dropdown.Item>
            </DropdownButton>

            <DropdownButton
                key="Warning"
                id="dropdown-variants-Warning"
                variant="warning"
                title="Select Type"
            >
                <Dropdown.Item onClick={() => queryType("All")}>
                    All Types
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryType("Hero")}>
                    Hero
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryType("Minion")}>
                    Minion
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryType("Spell")}>
                    Spell
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryType("Weapon")}>
                    Weapon
                </Dropdown.Item>
            </DropdownButton>

            <DropdownButton
                key="Warning"
                id="dropdown-variants-Warning"
                variant="warning"
                title="Select Atack"
            >
                <Dropdown.Item onClick={() => queryAtk(-1)}>all</Dropdown.Item>
                <Dropdown.Item onClick={() => queryAtk(0)}>0</Dropdown.Item>
                <Dropdown.Item onClick={() => queryAtk(1)}>1</Dropdown.Item>
                <Dropdown.Item onClick={() => queryAtk(2)}>2</Dropdown.Item>
                <Dropdown.Item onClick={() => queryAtk(3)}>3</Dropdown.Item>
                <Dropdown.Item onClick={() => queryAtk(4)}>4</Dropdown.Item>
                <Dropdown.Item onClick={() => queryAtk(5)}>5</Dropdown.Item>
                <Dropdown.Item onClick={() => queryAtk(6)}>6</Dropdown.Item>
                <Dropdown.Item onClick={() => queryAtk(7)}>7</Dropdown.Item>
                <Dropdown.Item onClick={() => queryAtk(8)}>7+</Dropdown.Item>
            </DropdownButton>

            <DropdownButton
                key="Warning"
                id="dropdown-variants-Warning"
                variant="warning"
                title="Select Health"
            >
                <Dropdown.Item onClick={() => queryHP(-1)}>all</Dropdown.Item>

                <Dropdown.Item onClick={() => queryHP(1)}>1</Dropdown.Item>
                <Dropdown.Item onClick={() => queryHP(2)}>2</Dropdown.Item>
                <Dropdown.Item onClick={() => queryHP(3)}>3</Dropdown.Item>
                <Dropdown.Item onClick={() => queryHP(4)}>4</Dropdown.Item>
                <Dropdown.Item onClick={() => queryHP(5)}>5</Dropdown.Item>
                <Dropdown.Item onClick={() => queryHP(6)}>6</Dropdown.Item>
                <Dropdown.Item onClick={() => queryHP(7)}>7</Dropdown.Item>
                <Dropdown.Item onClick={() => queryHP(8)}>8</Dropdown.Item>
                <Dropdown.Item onClick={() => queryHP(9)}>8+</Dropdown.Item>
            </DropdownButton>

            <DropdownButton
                key="Warning"
                id="dropdown-variants-Warning"
                variant="warning"
                title="Select Cost"
            >
                <Dropdown.Item onClick={() => queryCost(-1)}>all</Dropdown.Item>
                <Dropdown.Item onClick={() => queryCost(1)}>1</Dropdown.Item>
                <Dropdown.Item onClick={() => queryCost(2)}>2</Dropdown.Item>
                <Dropdown.Item onClick={() => queryCost(3)}>3</Dropdown.Item>
                <Dropdown.Item onClick={() => queryCost(4)}>4</Dropdown.Item>
                <Dropdown.Item onClick={() => queryCost(5)}>5</Dropdown.Item>
                <Dropdown.Item onClick={() => queryCost(6)}>6</Dropdown.Item>
                <Dropdown.Item onClick={() => queryCost(7)}>7</Dropdown.Item>
                <Dropdown.Item onClick={() => queryCost(8)}>8</Dropdown.Item>
                <Dropdown.Item onClick={() => queryCost(9)}>8+</Dropdown.Item>
            </DropdownButton>

            <DropdownButton
                key="Warning"
                id="dropdown-variants-Warning"
                variant="warning"
                title="Select Rarity"
            >
                <Dropdown.Item onClick={() => queryRarity("all")}>
                    all
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryRarity("Free")}>
                    Free
                </Dropdown.Item>

                <Dropdown.Item onClick={() => queryRarity("Common")}>
                    Common
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryRarity("Rare")}>
                    Rare
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryRarity("Epic")}>
                    Epic
                </Dropdown.Item>
                <Dropdown.Item onClick={() => queryRarity("Legendary")}>
                    Legendary
                </Dropdown.Item>
            </DropdownButton>
            <Button variant="warning" onClick={() => clearAll()}>
                Clear All
            </Button>
        </div>
    );
};

export default Criterias;
