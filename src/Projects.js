import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';

const Projects = () => {

    const projects = [
        {
            projectName: "Rate My Dining Halls",
            startDate: "July 2020",
            description: "MERN (MongoDB, Express, React, and Node) stack web app that allows users to rate dining halls at universities.",
            link: "https://www.ratemydininghalls.com"
        },
        {
            projectName: "The Machine",
            startDate: "June 2020",
            endDate: "June 2020",
            description: "Person of Interest-inspired program that would attempt to learn to form basic conversations utilizing natural language processing algorithms. Utilized Java and Selenium Chrome Webdriver.",
            link: "https://github.com/avocados23/ai"
        },
        {
            projectName: "Bucketlist",
            startDate: "October 2019",
            endDate: "March 2020",
            description: "Bucketlist is a web app that allows people to share with others their travel experiences. Built utilizing Bootstrap, PHP, and MySQL."
        },
        {
            projectName: "World Mini-War II",
            startDate: "March 2018",
            endDate: "June 2018",
            description: "Designed and coded a multi-player game from scratch in Java set in World War II where players competed against each other and faced mini-levels/objectives, based on several true events in the war. The project's main focus was to show off its genetic algorithm, utilizing a knapsack/rucksack-type problem to showcase combinatorial optimization. Additional features achieved on the game were the practice of creating vector art on Adobe Illustrator, designing the game with a 2D, 8-bit style, and utilization of the JavaFX framework.",
            link: "https://github.com/avocados23/ab-cs-proj/tree/master/Game"
        },
        {
            projectName: "Nova Chatting Services",
            startDate: "September 2012",
            endDate: "June 2013",
            description: "Coded and designed from scratch a chat box service in PHP and JavaScript (AJAX) where users could own and customize chat boxes with background designs and a surface where users could extensively edit their chat box design via CSS stylesheets."
        }
    ];

    return (
        <>
        <Jumbotron className="jumbo-header">
            <h1>My personal projects</h1>
            <p className="caption">Some things I do on the side</p>
        </Jumbotron>
        <Container fluid className="main-container">
            {
                projects.map((project, i) => 
                    <Row key={i}>
                        <Col xs={8} className="golden">
                            <h5>{project.projectName}</h5>
                            <p className="caption">
                                ({project.startDate} - { project.endDate !== undefined ? project.endDate : 'present' })
                            </p>
                            <p>
                                {project.description}
                            </p>
                            {
                                project.link !== undefined
                                ? <Button variant="light" href={project.link} className="project-a">View project</Button>
                                : null
                            }
                        </Col>
                    </Row>
                )
            }
        </Container>
        </>
    )
}
export default Projects;
