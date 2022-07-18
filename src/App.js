import React, { Component } from 'react';
import { Cats } from './Cats';
import CardList from './components/CardList';
import Searchbox from './components/Searchbox';
class App extends Component {
	constructor() {
		super();
		this.state = {
			Cats: Cats,
			searchfield: '',
		};
	}
	onSearchChange = event => {
		this.setState({ searchfield: event.target.value });
	};
	render() {
		const filteredCats = this.state.Cats.filter(Cats => {
			return Cats.imie.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		console.log(filteredCats);
		return (
			<div className=" box-border bg-gradient-to-r from-purple to-blue h-screen">
				<div className="flex justify-center">
					<h1 className="font-display text-7xl text-pink">ROBOTY</h1>
				</div>
				<Searchbox searchChange={this.onSearchChange} />
				<CardList Cats={filteredCats} />
			</div>
		);
	}
}

export default App;
