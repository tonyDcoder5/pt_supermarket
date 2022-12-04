import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function CateringForm(){


    const form = useRef();
    const [sentNotice, setSentNotice] = useState(null);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      if (
        !form.current[0].value ||
        !form.current[1].value ||
        !form.current[2].value
      ) {
        setSentNotice({message: "Message not sent, please review and complete form again"});
        setTimeout(() => {
          setSentNotice(null);
        }, 5000);
      }
  
      else {
       setSentNotice({message: "Message not sent, please review and complete form again"})
  
        setTimeout(() => {
          setSentNotice(null);
        }, 5000);
      }
    };

    return(
        <div className="container-one catering-div"> 
        <h2>Cater With Us!</h2>
        <Form ref={form} onSubmit={sendEmail} className="catering-form">
        <Form.Label>Name</Form.Label>
          <Row>
            <Form.Group as={Col} controlId="user_name">
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={form.user_name}
              />
            </Form.Group>
          </Row>
          <Form.Label>Phone Number</Form.Label>
          <Row>
            <Form.Group as={Col} controlId="phone_number">
              <Form.Control
                type="number"
                placeholder="Enter phone number"
                value={form.phone_number}
              />
            </Form.Group>
          </Row>
          <Form.Label htmlFor="emailInput">Email</Form.Label>
          <Row>
            <Form.Group as={Col}>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="user_email"
                value={form.user_email}
              />
            </Form.Group>
          </Row>
          <Form.Label htmlFor="orderInput">Order</Form.Label>
          <Row>
            <Form.Group as={Col}>
              <Form.Control 
              value={form.order_input} 
              type="text" 
              as="textarea"
              rows={5}
              name="order_input" />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit" name="contact-send-btn">
            Send
          </Button>
        </Form>
      {sentNotice && (
        <div className="send-notice">
          <h2>{sentNotice.message}</h2>
        </div>
      )}
        </div>
    )
} 