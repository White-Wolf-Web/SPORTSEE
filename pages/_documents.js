import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="fr">
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" type="image/png" sizes="192x192" href="/assets/iconSportSee.png" />
					<link rel="manifest" href="/manifest.json" />
				</Head>
				<body>
				
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
export default MyDocument;
