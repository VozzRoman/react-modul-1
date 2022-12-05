import Painting from "./components/Painting";
import painting from './painting.json';
export default function App() {
	return ( 
	<div>
		< Painting
		url={painting[0].url}
		title={painting[0].title}
		price={painting[0].price}
		author={painting[0].author.blog} />
	</div>
	);
}
