import Component from "./component.js";

export default class PlayerController extends Component {

	static meshList = [];

	start () {
		console.log("Initializing player controller!");
	}

	attach (gameObject) {
		this.meshList.push(gameObject);
	}

	update () {

		//console.log("Updating player controller!");

	}
} 
