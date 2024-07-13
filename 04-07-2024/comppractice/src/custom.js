import App from "./App";
import First, {Second} from "./extra";
import Notification from "./practice";

function Mycom() {
	return(
		<div className="comp">
		<p>This is Mycom Component</p>
		</div>
	);
}

function Compone() {
	return(
		<div className="comp">
		<p>This is Compone Component</p>
			<Second/>
		</div>
	)
}

function Comptwo() {
	return(
		<div className="comp">
		<p>This is Comptwo Component</p>
		</div>
	)
}

function Add() {
	return(
		<div className="comp">
			<p>This is Add Component</p>
			<Comptwo/>
			<First/>
			<Notification/>
			<App/>
		</div>
	)
}

export default Mycom;
export {Compone,Comptwo, Add};