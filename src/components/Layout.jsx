import Head from "next/head";
import Header from "./Header";
import ShuffleCards from "./ShuffleCards";
import Video from "./Video";
import HorizontalCards from "./HorizontalCards";

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width-device-width,initial-scale=1"
				/>
				<meta name="author" content="Rocky Wu" />
			</Head>
			<Header />
			<ShuffleCards />
			<Video />
			<HorizontalCards />
			{/* <main>{children}</main> */}
		</>
	);
}
