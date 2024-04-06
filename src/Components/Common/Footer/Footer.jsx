import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./footer.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
export function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="pb-5">
        <Col md="3" xs={12} className="px-3">
          <Link className="navbar-brand" to="/">
            <img src="/logo.png" width="150px" alt="" className="footer-logo"/>
          </Link>
          <p className="para-foot">
          SatoshiFX is an ecosystem of financial products including a CEX, DEX and Derivatives trading platform allowing users to seamlessly access thousands of financial assets using the ease and speed of crypto.
          </p>
        </Col>
        <Col md="3" xs={12} className="px-3">
          <h3>Additional Links</h3>
          <div className="d-flex justify-content-between">
            <ul>
              <li>Overview</li>
              <li>How it Works</li>
              <li>Roadmap</li>
            </ul>
            <ul>
              <li>About STMX</li>
              <li>Token</li>
              <li>Team</li>
            </ul>
          </div>
        </Col>
        <Col md="3" xs={12} className="px-3">
          <h3>Instagram Feed</h3>
          <div className="d-flex justify-content-between flex-column gallery-foot gap-2">
            <div className="d-flex gap-2 justify-content-around">
              <img src="/gallery-img.jpg" alt="" />
              <img src="/gallery-img-1.jpg" alt="" />
              <img src="/gallery-img-2.jpg" alt="" />
            </div>
            <div className="d-flex gap-2 justify-content-around">
              <img src="/gallery-img-3.jpg" alt="" />
              <img src="/gallery-img-4.jpg" alt="" />
              <img src="/gallery-img-5.jpg" alt="" />
            </div>
          </div>
        </Col>
        <Col md="3" xs={12} className="px-3">
          <h3>Search</h3>
          <InputGroup size="lg" className="form-foot">
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Search.."
            />
            <InputGroup.Text id="inputGroup-sizing-lg"><i className="fas fa-search"></i></InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
      <Row className="pt-3">
        <Col><h6 className="text-center text-white">
        Design And Developed By Maisha Infotech Pvt Ltd</h6></Col>
      </Row>
    </Container>
  );
}
