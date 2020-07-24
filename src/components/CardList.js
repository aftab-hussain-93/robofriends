import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	const cardComponent = robots.map(({id, name, email}) => {
		return <Card key={id} id={id} name={name} email={email}/>
	});
	
	return (<div>
		{cardComponent}
		</div>)
}

export default CardList;