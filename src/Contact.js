import React from 'react';
import { Container, Row, Col, Jumbotron, ListGroup } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Contact = () => {
    return (
        <>
        <Jumbotron className="jumbo-header">
            <h1>Contact me</h1>
        </Jumbotron>
        <Container fluid className="main-container">
            <Row>
                <Col xs={8} className="golden">
                    <h5 className="text-muted caption-h">My socials</h5>
                    <ListGroup horizontal>
                        <ListGroup.Item className="socials"><a href="https://github.com/avocados23" alt="Github"><FaGithub size="36" /></a></ListGroup.Item>
                        <ListGroup.Item className="socials"><a href="https://linkedin.com/in/nam-h-tran" alt="LinkedIn Profile"><FaLinkedin size="36" /></a></ListGroup.Item>
                        <ListGroup.Item className="socials"><a href="mailto:namht@vt.edu" alt="Personal e-mail"><GrMail size="36" /></a></ListGroup.Item>
                        <ListGroup.Item className="socials"><a href="https://twitter.com/boss_tran" alt="Twitter"><FaTwitter size="36" /></a></ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Contact;

