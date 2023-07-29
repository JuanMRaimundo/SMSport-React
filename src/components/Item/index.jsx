function Item({ data }) {
	console.log({ data });
	return (
		<div>
			<span>{data.mark}</span>
		</div>
	);
}

export default Item;
