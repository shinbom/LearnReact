import { useState } from 'react';
// Import Greeting from './components/Greeting';
import type Product from './types/Product';
import FilterableProductTable from './components/FilterableProductTable';

type AppProps = {
	name?: string;
};

const products: Product[] = [
	{ category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
	{ category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
	{ category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
	{ category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
	{ category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
	{ category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];

function Image({ src, alt = '', width }: {
	src: string;
	alt?: string;
	width?: string;
}) {
	return (
		<img src={src} alt={alt} width={width ?? 'auto'} />
	);
}

export default function App({ name = 'world' }: AppProps) {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<>
			<div>
				<h1>상품</h1>
			</div>
			<FilterableProductTable products={products} />
		</>
	);
}
