import React from "react";
import { HelloWorld, HelloWorldParent } from "./HelloWorld";

function App() {
	return (
		<React.Fragment>
			<HelloWorld />

			<HelloWorldParent name="Daniel" />
		</React.Fragment>
	);
}

export default App;
