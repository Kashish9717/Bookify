// BookForm.jsx
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListForm.css'; // custom black-yellow styling

function BookForm() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    price: '',
    stock: '',
    isbn: '',
    description: '',
    cover: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'cover') {
      setFormData({ ...formData, cover: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Book submitted successfully!');
    // Here you can send data to backend or firebase
  };

  return (
    <Container className="form-container mt-5 p-4 rounded shadow">
      <h2 className="text-yellow mb-4">Add New Book</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Label className="text-yellow">Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter book title"
              className="form-input"
              required
            />
          </Col>
          <Col md={6}>
            <Form.Label className="text-yellow">Author</Form.Label>
            <Form.Control
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter author name"
              className="form-input"
              required
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Label className="text-yellow">Category</Form.Label>
            <Form.Select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">Select category</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
              <option value="children">Children</option>
              <option value="science">Science</option>
              <option value="history">History</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Label className="text-yellow">Price ($)</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="form-input"
              required
            />
          </Col>
          <Col md={3}>
            <Form.Label className="text-yellow">Stock</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              placeholder="Enter stock"
              className="form-input"
              required
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Label className="text-yellow">ISBN</Form.Label>
            <Form.Control
              type="text"
              name="isbn"
              value={formData.isbn}
              onChange={handleChange}
              placeholder="Enter ISBN"
              className="form-input"
            />
          </Col>
          <Col md={6}>
            <Form.Label className="text-yellow">Cover Image</Form.Label>
            <Form.Control
              type="file"
              name="cover"
              onChange={handleChange}
              className="form-input"
              accept="image/*"
            />
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label className="text-yellow">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter book description"
            className="form-input"
            required
          />
        </Form.Group>

        <Button type="submit" variant="warning" className="text-dark fw-bold">
          Submit Book
        </Button>
      </Form>
    </Container>
  );
}

export default BookForm;
