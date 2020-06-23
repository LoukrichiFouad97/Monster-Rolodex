import React from "react";
import { Card } from "react-bootstrap";
import "./Monster.css";

const Monster = (props) => {
	return (
		<div>
			<Card className="text-center shadow mb-3 Monster">
				<Card.Img variant="top" src="http://placehold.it/100/50" />
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<Card.Text>{props.email}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Monster;
