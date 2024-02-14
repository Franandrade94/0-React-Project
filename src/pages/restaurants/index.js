import { Component } from "react";
import Restaurants from "../../components/restaurants";


export default class ResaurantPage extends Component {

    render() {
        return (
            <div id="RestaurantPage" className="Home-page">
                <Restaurants />
            </div>
        )
    }

}