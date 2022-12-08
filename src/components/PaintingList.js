import Painting from "./Painting";
import PropTypes from 'prop-types';
function PaintingList({ items }) {
	return (
		<ul>
			{items.map(paint => (
				<li key={paint.id}>
					< Painting // компонент
		 
						imageUrl={paint.url} // пропсы
						title={paint.title} // пропсы
						price={paint.price} // пропсы
						author={paint.author.blog} // пропсы
						quantity={paint.quantity}
					/>
				</li>
			))}
		</ul>
	);
}

PaintingList.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		}),
	),
};

export default PaintingList;