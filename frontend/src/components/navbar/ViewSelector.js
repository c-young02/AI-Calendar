import React from 'react';
import { Nav, ButtonGroup, Button } from 'react-bootstrap';

function ViewSelector({ view, setView }) {
	return (
		<Nav.Link>
			<ButtonGroup
				className="outline-secondary"
				aria-label="Changes calendar between week and month view"
			>
				<Button
					variant={view === 'week' ? 'secondary' : 'outline-secondary'}
					onClick={() => setView('week')}
				>
					Week
				</Button>
				<Button
					variant={view === 'month' ? 'secondary' : 'outline-secondary'}
					onClick={() => setView('month')}
				>
					Month
				</Button>
			</ButtonGroup>
		</Nav.Link>
	);
}

export default ViewSelector;
