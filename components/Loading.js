const Loading = () => (
	<div>
		<p>Fetching a sweet and savory recipe...</p>
		<style jsx>{`
		@keyframes load {
			0% {
				transform: scale(1);
			}

			50% {
				transform: scale(1.3) rotate(180deg);
			}

			100% {
				transform: scale(1) rotate(360deg);
			}
		}

		p {
			font-size: 1.5rem;
			text-align: center;
			padding: 20px 20px 0;
		}

		p::before {
			display: block;
			content: '🌮';
			text-align: center;
			font-size: 3rem;
			margin-bottom: 20px;
			animation: 1250ms load infinite linear;
		}
		`}</style>
	</div>
)

export default Loading;