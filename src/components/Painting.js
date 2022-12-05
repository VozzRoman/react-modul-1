
export default function Painting(props) {
	const {url, title, price, author} = props // destructorisation
	  console.log(props)
	return (<div>
		<img src={url} alt={title} width="480" />
		<h2>{title}</h2>
		<p>Author: <a href=""></a>{author}</p>
		<p>Price: {price}credits</p>
		<p>Availibility: less off or is on</p>
		<button type="button">Add to chart</button>
	</div>
	);
}