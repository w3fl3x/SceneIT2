import React, { Component } from "react";
import { ButtonToolbar, ToggleButton, ToggleButtonGroup } from "react-bootstrap";import { Container, Row, Col } from "../Grid";
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

export default Content;
