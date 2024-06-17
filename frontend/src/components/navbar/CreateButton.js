import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

function CreateButton() {
	return (
		<Nav.Link className="mt-1">
			<FaPlus size={30} />
		</Nav.Link>
	);
}

export default CreateButton;
