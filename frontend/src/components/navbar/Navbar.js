import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavbarBrand from './NavbarBrand';
import UserDropdown from './UserDropdown';
import SearchBar from './SearchBar';
import ViewSelector from './ViewSelector';
import DatePickerComponent from './DatePickerComponent';
import CalendarDropdown from './CalendarDropdown';
import TodayButton from './TodayButton';
import CreateButton from './CreateButton';

function TopNavView({ datePickerProps, viewProps, searchBarProps }) {
	return (
		<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
			<Container>
				<NavbarBrand />
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<TodayButton />
						<DatePickerComponent {...datePickerProps} />
						<CalendarDropdown />
					</Nav>
					<Nav>
						<ViewSelector {...viewProps} />
						<CreateButton />
						<SearchBar {...searchBarProps} />
						<UserDropdown />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default TopNavView;
