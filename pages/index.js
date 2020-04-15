import Head from 'next/head';
import TacoBox from '../components/TacoBox';

const Index = () => {
	return (
		<div>
			<Head>
				<title>Make This Taco</title>
				<meta name="description" content="Yummy taco recipes served up with netlify functions!" />
				<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>🌮</text></svg>"></link>
			</Head>
			<div className="wrapper">
				<div className="site-title">Make This Taco</div>
				<TacoBox />
			</div>
			<style jsx global>{`
			@font-face {
				font-family: 'Public Sans';
				font-style: normal;
				font-weight: 400 700;
				font-display: swap;
				src: url(https://fonts.gstatic.com/s/publicsans/v3/ijwRs572Xtc6ZYQws9YVwnNGfJ4.woff2) format('woff2');
			}

			@font-face {
				font-family: 'Kalam';
				font-style: normal;
				font-weight: 700;
				font-display: swap;
				src: local('Kalam Bold'), local('Kalam-Bold'), url(https://fonts.gstatic.com/s/kalam/v10/YA9Qr0Wd4kDdMtDqHTLMkiQ.woff2) format('woff2');
			}

			*, *::before, *::after {
				box-sizing: border-box;
				padding: 0;
				margin: 0;
			}

			body {
				display: grid;
				width: 100%;
				height: 100%;
				min-width: 100vw;
				min-height: 100vh;
				background: url('/images/tacos.jpg') no-repeat;
				background-size: cover;
				color: hsl(33, 100%, 8%);
				font-family: "Public Sans", system-ui, sans-serif;
				font-size: 1.15rem;
				line-height: 1.6;
				place-items: center;
				margin: 0;
			}

			body::before {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				background: linear-gradient(145deg, hsl(33, 100%, 49%), hsl(359, 89%, 24%) 100%);
				/* background-size: 400% 400%; */
				content: '';
				opacity: 0.8;
			}

			a {
				color: hsl(33, 100%, 42%);
			}

			h1 {
				display: block;
				text-align: center;
				font-size: 2.25rem;
				line-height: 1.2;
			}

			h1::after {
				display: block;
				width: 100%;
				height: 2px;
				background: linear-gradient(145deg, hsl(33, 100%, 59%), hsl(20, 100%, 49%) 100%);
				content: '';
				margin-top: 20px;
			}

			h2, h3 {
				font-weight: normal;
				font-size: 1.5rem;
				margin: 25px 0 5px;
			}

			p {
				margin: 20px 0;
			}

			ul, ol {
				list-style-position: outside;
				padding-left: 25px;
				margin: 0 0 20px;
			}

			li + ul {
				margin-top: 5px;
				font-size: 0.85em;
			}

			li {
				font-size: 1.1rem;
				margin-bottom: 10px;
			}
			`}
			</style>
			<style jsx>{`
			.wrapper {
				width: 100%;
				min-width: 509px;
				min-height: 254px;
				position: relative;
				background: #fff;
				border-radius: 10px;
				box-shadow: 0 0 20px -5px hsl(23, 57%, 20%);
				z-index: 1;
				padding: 30px;
			}

			.site-title {
				position: absolute;
				top: -30px;
				left: 50%;
				transform: translateX(-50%);
				background: hsl(33, 100%, 45%);
				font-family: Kalam;
				font-weight: bold;
				font-size: 3rem;
				line-height: 1;
				text-shadow: 1px 1px hsl(33, 100%, 24%),
							 1px 2px hsl(33, 100%, 24%),
							 1px 3px hsl(33, 100%, 24%),
							 1px 4px hsl(33, 100%, 24%);
				color: #fff;
				clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
				white-space: nowrap;
				padding: 12px 29px 7px 25px;
				z-index: 1;
			}
			`}</style>
		</div>
	)
}

export default Index;