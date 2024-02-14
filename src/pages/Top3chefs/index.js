import { Component } from "react";
import TopChefs from "../../components/Top3chefs";

export default class TopPage extends Component {

    render() {
        return (
            <div id="Home" className="Home-page">
                <TopChefs/>
            </div>
        )
    }

}