import React from 'react';
import { Nav, Button } from 'react-bootstrap';

function TodayButton() {
	return (
		<Nav.Link>
			<Button variant="secondary">Today</Button>
		</Nav.Link>
	);
}

export default TodayButton;
