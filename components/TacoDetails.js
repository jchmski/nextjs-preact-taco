const TacoDetails = ({ recipe }) => {
	return (
		<div>
			<div className="recipe-wrapper">
				{recipe && <div className="recipe" dangerouslySetInnerHTML={{ __html: recipe}} />}
			</div>
			<style jsx>{`
			.recipe-wrapper {
				position: relative;
				margin-bottom: 10px;
			}

			.recipe-wrapper::before, .recipe-wrapper::after {
				display: block;
				width: 100%;
				height: 50px;
				position: absolute;
				content: '';
			}

			.recipe-wrapper::before {
				top: 0;
				background: linear-gradient(#fff, hsla(0, 100%, 100%, 0));
			}

			.recipe-wrapper::after {
				bottom: 0;
				background: linear-gradient(0deg, #fff, hsla(0, 100%, 100%, 0));
			}

			.recipe {
				width: 60ch;
				min-height: 500px;
				max-height: 600px;
				overflow-x: hidden;
				overflow-y: scroll;
				padding: 40px;
			}
			`}</style>
		</div>
	)
}

export default TacoDetails;