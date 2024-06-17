import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

function CalendarDropdown() {
	return (
		<Nav.Link>
			<NavDropdown title="Calendar" id="collapsible-nav-dropdown">
				<NavDropdown.Item href="/">Calendar</NavDropdown.Item>
			</NavDropdown>
		</Nav.Link>
	);
}

export default CalendarDropdown;
