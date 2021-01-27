import React, { useState } from 'react';
import { Container, Row, Col, Jumbotron, Spinner } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';
import resume from './assets/Resume.pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const Loading = () => {
        return (
            <Spinner animation="border" className="loading" />
        );
    }
    return (
        <>
        <Jumbotron className="jumbo-header">
            <h1>Resumé</h1>
        </Jumbotron>
        <Container>
            <Row className="justify-content-md-center">
                <Col md>
                    <center>
                        <Document file={resume}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={Loading}>
                            <Page pageNumber={pageNumber} />
                        </Document>
                    </center>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Resume;