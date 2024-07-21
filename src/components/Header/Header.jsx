import React from 'react'
import './Header.css'
import {Col, Container, Row} from "react-bootstrap";

const Header = () => {
    return (<div className='mt-5'>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="head-left">
                        <span className="head-subtitle">
                            Healthy & Tasty Food
                        </span>
                            <div className="w-100 mt-2 head-title border">
                                <h1 style={{color: '#FB9431'}}>Archive Optimal </h1>
                                <h1 style={{color: '#3D3F42'}}>Wellness with our Nutrients </h1>
                                <h1 style={{color: '#3D3F42'}}> Meal Plan</h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
export default Header
