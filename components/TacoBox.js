import TacoDetails from '../components/TacoDetails';
import Loading from '../components/Loading';
import useSWR, { mutate } from 'swr';
import marked from 'marked';

const fetcher = async (url) => {
	const response = await fetch(url);
	const data = response.json();

	return data;
}

const taco_api = '/api/taco';

const TacoBox = () => {
	const { data, error, isValidating } = useSWR(taco_api, fetcher, {
		revalidateOnFocus: false,
		refreshWhenOffline: false
	});

	let recipe = data?.base_layer?.recipe;

	if (isValidating) return <Loading />;
	if (error) return <p>Couldn't deliver on that juicy goodness :(</p>;

	if (recipe) {
		recipe = marked(recipe);
	}

	return (
		<div>
			{recipe && <TacoDetails recipe={recipe} />}
			{recipe && <button onClick={() => mutate(taco_api, true)}>Next 🌮</button>}
			<style jsx>{`
			button {
				display: block;
				min-width: 300px;
				min-height: 200px;
				background: linear-gradient(150deg, hsl(33, 100%, 54%), hsl(20, 100%, 49%) 100%);
				font-family: Kalam, sans-serif;
				font-size: 1.5rem;
				color: #fff;
				border: 3px solid hsl(33, 100%, 74%);
				border-radius: 10px;
				text-transform: uppercase;
				letter-spacing: 0.05em;
				cursor: pointer;
				padding: 11px 20px 7px;
				margin: 0 auto;
			}

			button:hover {
				background: hsl(20, 100%, 49%);
			}
			`}
			</style>
		</div>
	)
}

export default TacoBox;