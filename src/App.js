import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './paintings.json';
export default function App() {
	return ( 
		<div>
			{/* <PaintingList items={paintings} /> */}
			<Section title="Топ недели"> 
{/* //можно вставить один компонентк в другой как children */}
				<PaintingList items={paintings} /> 
{/* //можно вставить один компонентк в другой как children */}
			</Section>
			<Section />
			{/* {paintings.map(paint => (
				< Painting // компонент
		key={paint.id} // ключ что бы не было ошибок при рендре разметки
		imageUrl={paint.url} // пропсы
		title={paint.title} // пропсы
		price={paint.price} // пропсы
		author={paint.author.blog} // пропсы
		quantity={paint.quantity}
			/>
			))} */}
	
					{/* < Painting
		imageUrl={painting[1].url}
		title={painting[1].title}
		price={painting[1].price}
		// author={painting[1].author.blog} - не пришло значение (дефлотное значение author = 'unkomwn')
		quantity={painting[1].quantity}		
			/>
					< Painting
		imageUrl={painting[2].url}
		title={painting[2].title}
		price={painting[2].price}
		author={painting[2].author.blog}
		quantity={painting[2].quantity}		
		/> */}
			

	</div>
	);
}

//Загрузить что то (это может быьб строка или разметка) по условию!!
//Или логическое И или Тренарник
// export default function App() {
// 	const isOnline = false;

// 	return (
// 		<div>
// 			{isOnline && 'Онлайн'}

// 			{isOnline ? 'Онлайн' : 'Офлайн'}
// 		</div>
// 	)
// }



//Рендрим коллекцию

// export default function App() {
// 	return (
// 		<div>
// 			{[1, 2, 3, 4, 5].map(el => {
// 				<div>{el}</div>
// 			})}
// 	</div>
// 	)
// }