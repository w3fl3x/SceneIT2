import React, { Component } from "react";
<<<<<<< Updated upstream
import { ButtonToolbar, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { Container, Row, Col } from "../Grid";
import './Content.css';

const Content = () => (
    
    
    <>
        <Container>
            <div className="movieList">
            <Row>
                <Col size="md-12">

                    <ButtonToolbar>
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton variant="outline-secondary" value={1}>Must Watch</ToggleButton>
                            <ToggleButton variant="outline-secondary" value={2} >Seen It</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>
                </Col>
            </Row>
            <Row>
                <p>Movie List Here</p>
                <Col size="md-5">
                    
                </Col>
            </Row>
            </div>
        </Container>
    </>
);
=======
import "./Content.css";

function Content({ id, name, genre, Button1, Button2 }) {
  return (
    <ul>
      <li>
        <h3>{name}</h3>
      </li>
      <li>{genre}</li>
      <li>
        <span>
          <Button1 /> <Button2 />
        </span>
      </li>
    </ul>
  );
}
>>>>>>> Stashed changes

export default Content;
