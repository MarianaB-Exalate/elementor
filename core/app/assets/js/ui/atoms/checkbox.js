import './checkbox.scss';

export default function Checkbox( props ) {
	return (
		<input
			{ ...props }
			type="checkbox"
			disabled={ props.disabled }
			className={ `eps-checkbox ${ props.className }` }
			data-value={ Math.random() }
		/>
	);
}

Checkbox.propTypes = {
	className: PropTypes.string,
	disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
	className: '',
	disabled: false,
};
