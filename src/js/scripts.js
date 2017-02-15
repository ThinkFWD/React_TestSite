require('/src/js/module1.js');
require('/src/js/module2.js');

import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	render() {
		return (
			<h1>It Works</h1>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<layout/>,app);


