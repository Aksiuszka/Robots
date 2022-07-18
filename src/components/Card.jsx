import React from 'react';

function Card({ imie, location, food, id }) {
	return (
		<div className="container mx-auto px-4 shadow-2xl ml-20 w-5/6 h-80 flex flex-col justify-center hover:animate-pulse">
			<div className="flex justify-center">
				<img
					src={`https://robohash.org/${id}?set=set4?150x150" alt="robo kitten" className="w-1/2`}
					alt=""
				/>
			</div>
			<div className="flex justify-center bg-[#1da1f2] content-center ">
				<h2>{imie}</h2>
			</div>
			<div className="flex justify-center bg-[#1da1f2] content-center ">
				<p>{location}</p>
			</div>
		</div>
	);
}

export default Card;
