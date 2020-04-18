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
			{recipe && <button onClick={() => mutate(taco_api, true)}><span className="next">Next</span><span className="taco">🌮</span></button>}
			<style jsx>{`
			button {
				display: block;
				background: linear-gradient(150deg, hsl(33, 100%, 54%), hsl(20, 100%, 49%) 100%);
				font-family: Kalam, sans-serif;
				font-size: 1.5rem;
				color: #fff;
				border: 1px solid hsl(33, 100%, 54%);
				box-shadow: 0 0 0 2px hsl(33, 100%, 74%);
				border-radius: 10px;
				text-transform: uppercase;
				letter-spacing: 0.05em;
				cursor: pointer;
				padding: 11px 40px 7px;
				margin: 0 auto;
			}

			button:hover, button:focus {
				background: linear-gradient(150deg, hsl(33, 100%, 58%), hsl(20, 100%, 53%) 100%);
				box-shadow: 0 0 0 4px hsl(33, 100%, 74%);
				outline: none;
			}

			button > span {
				display: inline-block;
			}

			button:hover > .next {
				animation: bouncy-words 500ms infinite linear;
			}

			button:active {
				background: linear-gradient(150deg, hsl(33, 100%, 52%), hsl(20, 100%, 46%) 100%);
			}

			@keyframes bouncy-words {
				0% {
					transform: translateY(0);
				}

				33% {
					transform: translateY(1px);
				}

				66% {
					transform: translateY(-1px);
				}

				100% {
					transform: translateY(0);
				}
			}

			button > .taco {
				margin-left: 10px;
			}

			button:hover > .taco {
				animation: bouncy-taco 1500ms infinite linear;
			}

			@keyframes bouncy-taco {
				0% {
					transform: translateY(0);
				}

				5% {
					transform: translateY(1px);
				}

				35% {
					transform: translateY(-4px) rotate(120deg);
				}

				90% {
					transform: translateY(0) rotate(360deg);
				}

				100% {
					transform: translateY(0) rotate(360deg);
				}
			`}
			</style>
		</div>
	)
}

export default TacoBox;