import React, { Component, Fragment } from "react";

const HelloWorld = () => {
	return <p>Hello there .. i am cool.eee</p>;
};

class HelloWorldParent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			lightOn: true,
		};
	}

	render() {
		return (
			<Fragment>
				<form>
					{this.props.name}
					<input
						type="text"
						value={this.state.name}
						onChange={(e) =>
							this.setState({
								...this.state,
								name: e.target.value,
							})
						}
						placeholder="Your name"
					/>
					<input type="checkbox" value={this.state.lightOn} />

					<span>Your name is {this.state.name}</span>
				</form>
			</Fragment>
		);
	}
}

//export default HelloWorld;
export { HelloWorld, HelloWorldParent };
