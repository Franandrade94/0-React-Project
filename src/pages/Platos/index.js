import { Component } from "react";
import Platos from "../../components/platos";

export default class PlatosPage extends Component {

    render() {
        return (
            <div id="Home" className="Home-page">
                <Platos/>
            </div>
        )
    }

}