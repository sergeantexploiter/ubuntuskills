import React, { Component, useState, useEffect } from "react";

const HelloWorld = (props) => {
	const [school, setSchool] = useState("");
	const [movie, setMovie] = useState("");

	useEffect(() => {
		console.log("Start up");

		return () => {
			console.log("Component is unmounting");
		};
	}, []); //Run only once

	useEffect(() => {
		// Send a request to a movie server and retrieve list
		if (movie.length > 0) {
			console.log(`Sending movie (${movie}) to movie server.....`);
		}
	}, [movie, school]);

	useEffect(() => {
		// Send a request to a movie server and retrieve list
		if (movie.length > 0) {
			console.log(`Sending movie (${movie}) to movie server.....`);
		}
	}, [movie, school]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("====================================");
		console.log("data received");
		console.log("====================================");
	};

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit}>
				{props.name}
				<p>{school.length === 0 ? "I don't attend any school" : `I attend ${school}`}</p>
				<input type="text" name="school" id="" value={school} onChange={(e) => setSchool(e.target.value)} placeholder="Enter school" />
				<br />
				<input type="text" name="movie" id="movie" value={movie} onChange={(e) => setMovie(e.target.value)} placeholder="Enter movie" />

				<br />
				<br />
				<input type="submit" value="Submit form" />
			</form>
		</React.Fragment>
	);
};

class HelloWorldParent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Daniel",
			age: 23,
			school: "Legon",
			lightOn: true,
			catName: "Meow",
			dogName: "Bark",
		};

		this.Eunice = this.Eunice.bind(this);
	}

	componentDidMount() {
		console.log("Component has been called");
	}

	componentDidUpdate() {
		console.log("Component has been updated");
	}

	componentWillUnmount() {
		console.log("Component has been unmounted");
	}

	Eunice = (e) => {
		this.setState({
			...this.state,
			name: e.target.value,
		});
	};

	render() {
		return (
			<React.Fragment>
				<form>
					{this.props.name}
					<br />
					<input type="text" value={this.state.name} onChange={this.Eunice} placeholder="Your name" />
					<br />
					<span>Your name is {this.state.name ? `${this.state.name} Age: ${this.state.age}` : "Doesn't exist"}</span>
				</form>
			</React.Fragment>
		);
	}
}

//export default HelloWorld;
export { HelloWorld, HelloWorldParent };
