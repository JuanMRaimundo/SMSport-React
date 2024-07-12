import React from "react";

import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

function Home({ searchQuery }) {
	return (
		<div className="itemListConteiner">
			{<ItemListContainer searchQuery={searchQuery} />}
		</div>
	);
}

export default Home;
