
// import React from "react"; // импортируем пакет для создания елементов
import App from './App';
import ReactDOM from "react-dom"; // импортируем пакет для рендринга елементов в ДОмДереве

//срздание елементов
// const element = React.createElement('div', { a: 5, b: 10, g: 20 }, 'Привет Все','','gold');
//елемент это объект где есть свойство PROPS: a: 5, b: 10, g: 20,  children 'Привет Все'
//children это ребенок от element
//если записать больше в Чилдрен const element = React.createElement('div', { a: 5, b: 10, g: 20 }, 'Привет Все','','gold')  то чилдрен будет уже массивом



// const element = React.createElement('div', {
// 	a: 5, // типа как атрибуты тега
// 	b: 10, // типа как атрибуты тега
// 	g: 20, // типа как атрибуты тега
// 	children: ['Привет Всем',' ','gold'], // то что стоит между тегами
// }, );
// console.log(element);

// //создадим два  span
// const elem1 = React.createElement('span', {children:'Hello' });
// const elem2 = React.createElement('span' ,{children:'world'});
// const element3 = React.createElement('div', {
// 	a: 5, // типа как атрибуты тега
// 	b: 10, // типа как атрибуты тега
// 	g: 20, // типа как атрибуты тега
// 	children: [elem1,' ',elem2], // то что стоит между тегами
// }, );
// //рендрим елемент в дом дереве
// // ReactDOM.render(element, document.querySelector('#root')); // element - елемент который будем рендерить, document.querySelector('#root') - ссылка на рут Дом дерева <div id="root"></div>
// ReactDOM.render(element3, document.querySelector('#root'));
//======================================================================================
//JSX Elements
//для JSX Elements не нужно имортировать пакет import React from "react";
// const jsxElement = <div>Hello world</div>;
// console.log(jsxElement); 


// const elem1 = <span>Hello</span>
// const elem2 = <span>World</span>

// const jsxElement = (
// 	<div>
// 		{elem1}
// 		{elem2}
// 	</div>
// )
// console.log(jsxElement); 
//=======================================================================================
//COMPONENTS

//Верстальщик сказал - сделай мне такую разметку:
// {/* <div>
// 	<img src="" alt="" width="480" />
// 	<h2></h2>
// 	<p>Author: <a href=""></a></p>
// 	<p>Price: credits</p>
// 	<p>Availibility: less off or is on</p>
// 	<button type="button">Add to chart</button>
// </div> */}

// const data = {
		
// 		id: "id-1",
// 		url: "https://static-cse.canva.com/blob/847064/29.jpg",
// 	title: "Feathers. Art",
// 		price: 500,
// 		author: {
// 			tag: "rotobus",
// 			blog: "blogs"
// 		},
// 		quantity: 10
	
// }

// const painting = (
// <div>
// 	<img src={data.url} alt={data.title} width="480" />
// 	<h2>{data.title}</h2>
// 		<p>Author: <a href={data.url}></a>{data.author.blog }</p>
// 		<p>Price: {data.price} credits</p>
// 		<p>Availibility: {data.quantity}</p>
// 	<button type="button">Add to chart</button>
// </div> 

// );
// ReactDOM.render(painting, document.querySelector('#root'));


// import painting from './painting.json';

// function Painting(props) {
// 	const {url, title, price, author} = props // destructorisation
// 	  console.log(props)
// return	 <div>
// 	<img src={url} alt={title} width="480" />
// 	<h2>{title}</h2>
// 	<p>Author: <a href=""></a>{author}</p>
// 	<p>Price: {price}credits</p>
//  	<p>Availibility: less off or is on</p>
//  	<button type="button">Add to chart</button>
//  </div> 
// }

// const paintings = painting[0];
// <Painting
// 	url={paintings.url}
// 	title={paintings.title}
// 	price={paintings.price}
// 	author={paintings.author.blog} />

ReactDOM.render(<App />,document.querySelector('#root')); //<Painting/> - КОМПОНЕНТ
//url={paintings.url} title={paintings.title} - назначем пропсы из painting.json
//========================================================
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
