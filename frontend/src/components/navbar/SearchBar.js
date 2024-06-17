import React from 'react';
import { Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ showSearch, setShowSearch, searchRef }) {
	return !showSearch ? (
		<Nav.Link className="mt-1 mx-3" onClick={() => setShowSearch(true)}>
			<FaSearch size={30} />
		</Nav.Link>
	) : (
		<Nav.Link ref={searchRef}>
			<Form inline className="d-flex">
				<FormControl type="text" placeholder="Search" className="mr-2" />
				<Button type="submit">Submit</Button>
			</Form>
		</Nav.Link>
	);
}

export default SearchBar;
