import React from "react";
import "./App.css";
import {Button, Col, Container, Row} from 'react-bootstrap'
import LeBronImg from './task3LeBron.jpg'

function App(): React.JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                    <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Hello World, I am Mikul Duggal
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div style={ {width: '100px', height: '125px', backgroundColor: 'red'}}></div>
                    </Col>
                    <Col>
                    <h1> Learning basic HTML with LeBron</h1>
                    <img src={LeBronImg} alt="A picture of LeBron James."/>
            Top 3 NBA Players of All Time:
                <ol>
                    <li>LeBron James</li>
                    <li>Kareem Abdul-Jabaar</li>
                    <li>Michael Jordan</li>
                </ol>
            <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World!</Button>

            <div style={ {width: '100px', height: '125px', backgroundColor: 'red'}}></div>

                    </Col>
                </Row>
            
            
            </Container>
            
        </div>
    );
}


export default App;
