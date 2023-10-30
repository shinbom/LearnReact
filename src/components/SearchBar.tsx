import CheckBoxFiled from './CheckBoxFiled';

export default function SearchBar() {
	return (
		<div className='search-bar'>
			<div>
				<input type='text' placeholder='검색어를 입력하세요' />
			</div>
			<CheckBoxFiled label='Only show products in stock' />
		</div>
	);
}
