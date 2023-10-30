import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

import type Product from '../types/Product';

type FilterableProductTableProps = {
	products: Product[];
};

export default function FilterableProductTable({ products }: FilterableProductTableProps) {
	return (
		<div>
			{/*
				<Greeting name='world'/>
				<Image src='/images/cat.jpg' alt='' width='400' />
				<p>Hello, {name}!</p>
				<p>Count, {count}!</p>
				<button type='button' onClick={handleClick}>클릭!</button>
			*/}
			<div>
				<SearchBar />
				<ProductTable products={products} />
			</div>
		</div>
	);
}
