import fetch from 'node-fetch';

export default async (req, res) => {
	const response = await fetch('http://taco-randomizer.herokuapp.com/random?full-taco=true');
	const data = await response.json();

	setTimeout(() => {
		res.status(200).json(data)
	}, 2000);
}