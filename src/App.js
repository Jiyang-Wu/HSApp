import Cardset from "./Cardset";
import Criterias from "./Criterias";
import Nav from "./navbar";
import { useCardContext } from "./Shopper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
    const { isLoading } = useCardContext();

    if (isLoading) {
        return <div className="loading"></div>;
    } else {
        return (
            <div>
                <Nav></Nav>
                <div className="content">
                    <div className="querying">
                        <Criterias />
                    </div>

                    <div className="displaying">
                        <Cardset />
                    </div>
                </div>
            </div>
        );
    }
};
export default App;
