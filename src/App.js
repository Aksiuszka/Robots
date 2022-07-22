import React, { Component } from 'react';
import { Cats } from './Cats';
import CardList from './components/CardList';
import Searchbox from './components/Searchbox';
import Scroll from './components/Scroll';
import ErrorBoundry from './components/ErrorBoundry';
// import Counter from './components/Counter';
class App extends Component {
	constructor() {
		super();
		this.state = {
			Cats: [],
			searchfield: '',
		};
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ Cats: users }));
	}
	onSearchChange = event => {
		this.setState({ searchfield: event.target.value });
	};
	render() {
		const filteredCats = this.state.Cats.filter(Cats => {
			return Cats.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		console.log(filteredCats);
		return (
			<div className=" box-border bg-gradient-to-r from-purple to-blue h-screen">
				<div className="flex justify-center">
					<h1 className="font-display text-7xl text-pink">ROBOTY</h1>
				</div>
				<Searchbox searchChange={this.onSearchChange} />
				{/* <Counter /> */}
				<Scroll>
					<ErrorBoundry>
						<CardList Cats={filteredCats} />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
}

export default App;
