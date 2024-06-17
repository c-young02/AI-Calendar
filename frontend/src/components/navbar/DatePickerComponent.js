import React from 'react';
import { Nav } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './DatePickerComponent.module.css';

function DatePickerComponent({ startDate, setStartDate }) {
	return (
		<Nav.Link href="#datepicker">
			<DatePicker
				className={styles.datePicker}
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				dateFormat="MMMM YYYY"
			/>
		</Nav.Link>
	);
}

export default DatePickerComponent;
