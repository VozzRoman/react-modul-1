
import PropTypes from 'prop-types'; // npm pacakge для проверки типов данных которые приходят с бекенда
import defaultImage from './default.jpg'; // передаем дефолтное значение каринки

console.log(defaultImage);

export default function Painting(props) {
	const { imageUrl = defaultImage, title, price, author = 'unkomwn', quantity } = props // destructorisation
	// если како-это значнеие не придет то ставим дефолтное значение author = 'unkomwn'
	  console.log(props)
	return (<div>
		<img src={imageUrl} alt={title} width="480" />
		<h2>{title}</h2>
		<p>Author: <a href=""></a>{author}</p>
		<p>Price: {price}credits</p>
{/* по условию - если меньши 10 то товар заканчиывается если больше то товар есть в наличии */}
		<p>Availibility: {quantity < 10 ? 'less off' : 'is on'}</p>
		<button type="button">Add to chart</button>
	</div>
	);
}
//Проверяем на тип данных
Painting.propTypes = {
	imageUrl: PropTypes.string.isRequired, // isRequired
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	author: PropTypes.string.isRequired,
};
//может быть
// MyComponent.propTypes = {
//   // You can declare that a prop is a specific JS primitive. By default, these
//   // are all optional.
// //   optionalArray: PropTypes.array,
// //   optionalBigInt: PropTypes.bigint,
// //   optionalBool: PropTypes.bool,
// //   optionalFunc: PropTypes.func,
// //   optionalNumber: PropTypes.number,
// //   optionalObject: PropTypes.object,
// //   optionalString: PropTypes.string,
// //   optionalSymbol: PropTypes.symbol,