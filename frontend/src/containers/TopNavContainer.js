import React, { useState, useRef, useEffect } from 'react';
import TopNavView from '../components/navbar/Navbar';

function TopNavContainer() {
	const [startDate, setStartDate] = useState(new Date());
	const [view, setView] = useState('week');
	const [showSearch, setShowSearch] = useState(false);
	const searchRef = useRef();

	useEffect(() => {
		function handleClickOutside(event) {
			if (searchRef.current && !searchRef.current.contains(event.target)) {
				setShowSearch(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [searchRef]);

	return (
		<TopNavView
			datePickerProps={{ startDate, setStartDate }}
			viewProps={{ view, setView }}
			searchBarProps={{ showSearch, setShowSearch, searchRef }}
		/>
	);
}

export default TopNavContainer;
