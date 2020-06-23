import React from "react";
import { Form } from "react-bootstrap";

export const SearchBox = ({ placeHolder, handleChange }) => {

	return (
		<Form.Group className="my-5">
			<Form.Control
				type="email"
				placeholder={placeHolder}
				onChange={handleChange}
			/>
		</Form.Group>
	);
};
