import React, { Component } from "react";
import './Content.css';
import { Container, Row, Col } from "../Grid";
import { ButtonToolbar, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const Content = () => (
    <>
        <p>Stuff</p>

        <Container>
            <Row>
                <Col size="md-12">

                    <ButtonToolbar>
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton value={1}>Top Movies</ToggleButton>
                            <ToggleButton value={2}>Seen</ToggleButton>
                        </ToggleButtonGroup>
                    </ButtonToolbar>

                    {/* <Button onClick={this.handleFormSubmit} type="success" className="input-lg">
                    Search
                </Button>
                <Button onClick={this.handleFormSubmit} type="success" className="input-lg">
                    Search
                </Button> */}
                </Col>
            </Row>
            {/* <Row>

        </Row> */}
        </Container>
    </>
);

export default Content;
