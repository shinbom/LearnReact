import { useRef } from 'react';

type CheckBoxFiledProps = {
	label: string;
};

export default function CheckBoxFiled({ label }: CheckBoxFiledProps) {
	const id = useRef(`checkbox-${label.replace(/ /g, '-').toLowerCase()}`);
	return (
		<div>
			<input type='checkbox' id={id.current} />
			<label htmlFor={id.current}>{label}</label>
		</div>
	);
}
