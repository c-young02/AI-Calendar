import { NavDropdown } from 'react-bootstrap';
import { FaRegUserCircle } from 'react-icons/fa';

function UserDropdown() {
	return (
		<NavDropdown
			title={<FaRegUserCircle size={30} />}
			className="mt-1"
			id="collapsible-nav-dropdown"
		>
			<div className="mx-3">Hi, Username</div>
			<NavDropdown.Divider />
			<NavDropdown.Item href="/">Settings</NavDropdown.Item>
			<NavDropdown.Item href="/">Logout</NavDropdown.Item>
		</NavDropdown>
	);
}

export default UserDropdown;
