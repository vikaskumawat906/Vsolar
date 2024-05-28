import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    location: ""
  });

  const handleUpdate = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    setForm({
      name: "",
      email: "",
      number: "",
      location: ""
    })
  };

  return (
    <Container fluid className="contactpage">
      <div className="contactform">
        <Form onSubmit={handleSubmit} style={{ marginTop: '50px', width: '100%' }}>
          <Form.Group className="mb-2" controlId="formBasicName">
            <Form.Label className="formlabel">Enter Your Name</Form.Label>
            <Form.Control
              className="forminput"
              type="text"
              name="name"
              value={form.name}
              onChange={handleUpdate}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label className="formlabel">Enter Your Email</Form.Label>
            <Form.Control type="email" name="email" value={form.email} onChange={handleUpdate}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicNumber">
            <Form.Label className="formlabel">Mobile Number</Form.Label>
            <Form.Control type="number" name="number" value={form.number} onChange={handleUpdate}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicLocation">
            <Form.Label className="formlabel">Your Location</Form.Label>
            <Form.Control type="text" name="location" value={form.location} onChange={handleUpdate}
            />
          </Form.Group>
          <Button className="submitbtn" variant="success" type="submit">
            Submit Now
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Contact;
