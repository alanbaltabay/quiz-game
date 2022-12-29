export default function Option(props) {
	function cleanseString(str) {
		return str
			.replace(/&quot;/g, '"')
			.replace(/&#039;/g, "'")
			.replace(/&eacute;/g, 'é')
			.replace(/&Uuml;/g, 'Ü')
			.replace(/&shy;/g, '-')
			.replace(/&Delta;/g, 'Δ')
			.replace(/&amp;/g, '&')
			.replace(/&rsquo;/g, '`')
			.replace(/&lrm;/g, '');
	}

	return (
		<div className='option'>
			<input
				type='radio'
				name={`radioOption` + props.radioNumber}
				id={cleanseString(props.option)}
				value={props.radioValue}
				checked={
					props.radioData['radioOption' + props.radioNumber] ===
					props.radioValue
				}
				onChange={props.handleChange}
			/>
			{
				<label htmlFor={cleanseString(props.option)}>
					{cleanseString(props.option)}
				</label>
			}
		</div>
	);
}
