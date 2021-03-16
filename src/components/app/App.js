import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {LoginPage, HomePage} from '../../pages';
import Header from "../header";
import Footer from "../footer";
import {Container, Row, Col} from 'react-bootstrap';
import './app.css';


const App = () => {

    return (
        <Container role='main'>
            <Row>
                <Col>
                    <Header />
                    <Switch>
                        <Route exact path='/' component ={HomePage}/>
                        <Route path='/login' component={LoginPage}/>
                    </Switch>
                    <Footer />
                </Col>
            </Row>
        </Container>
    )
};

export default App
