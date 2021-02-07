import React from 'react';
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap';
import namPic from './assets/nam.jpg';

const Home = () => {
    return (
        <>
        <Jumbotron className="jumbo-header">
            <h1>Nam Tran</h1>
            <p className="caption">Computer Science Student at Virginia Tech</p>
        </Jumbotron>
        <Container fluid className="main-container">
            <Row>
                <Col xs={8} className="golden">
                    <h5 className="text-muted caption-h">A little bit about myself</h5>
                    <p className="p-info">Hi, my name is Nam Tran! I am currently a sophomore majoring in computer science at the Virginia Tech
                    College of Engineering. Currently, I am on track to graduate in the spring of 2023. I am currently a member of the Delta Psi
                    Nu Fraternity and in my free time, I like to code side projects and play basketball.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col xs={8} className="golden" style={{paddingBottom:"10vh"}}>
                    <Image src={namPic} className="profile-pic" />
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Home;