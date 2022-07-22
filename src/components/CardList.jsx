import React from 'react';
import Card from './Card';

function CardList({ Cats }) {
	const cardComponent = Cats.map((cat, i) => {
		return (
			<Card
				key={i}
				id={Cats[i].id}
				name={Cats[i].name}
				location={Cats[i].location}
				food={Cats[i].food}
			/>
		);
	});
	return <div className="grid grid-cols-3">{cardComponent}</div>;
}

export default CardList;
