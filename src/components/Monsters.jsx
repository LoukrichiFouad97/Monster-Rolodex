import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Monster from "./Monster";
import uuid from "uuid";

export default class Monsters extends Component {
	render() {
		const newMoster = this.props.monsters.map((monster) => (
			<Col sm="6" md="4" lg="3" key={uuid()}>
				<Monster name={monster.name} email={monster.email} />
			</Col>
		));

		return (
			<Container>
				<Row>{newMoster}</Row>
			</Container>
		);
	}
}
