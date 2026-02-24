// Navbar.jsx

import { Navbar as BootstrapNavbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Navbar.css'; // We'll add custom styles here


// logout
import { useFirebase } from "../Context/FireBaseP";



function MyNavbar() {


const { isLoggedIn, handleLogout } = useFirebase();

  return (
    <BootstrapNavbar expand="lg" sticky="top" className="custom-navbar">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="text-yellow">
          📚 BookStore
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="bookshop-navbar" className="custom-toggler" />
        <BootstrapNavbar.Collapse id="bookshop-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-yellow">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop" className="text-yellow">Shop</Nav.Link>
            <Nav.Link as={Link} to="/list" className="text-yellow">Add Listing</Nav.Link>
           

            <NavDropdown title="Categories" id="categories-dropdown" className="text-yellow">
              <NavDropdown.Item as={Link} to="/category/fiction">Fiction</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/non-fiction">Non-Fiction</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/children">Children</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/science">Science</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about" className="text-yellow">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-yellow">Contact</Nav.Link>
          </Nav>

          <Form className="d-flex me-3">
            <FormControl
              type="search"
              placeholder="Search books..."
              className="me-2 custom-search"
              aria-label="Search"
            />
            <Button variant="warning">Search</Button>
          </Form>
{/* LOGIN ,LOGOUT */}
             <Nav>
            <Nav.Link as={Link} to="/cart" className="text-yellow">🛒 Cart</Nav.Link>
            {!isLoggedIn && <>
              <Nav.Link as={Link} to="/login" className="text-yellow">Login</Nav.Link>
              <Nav.Link as={Link} to="/register" className="text-yellow">Sign Up</Nav.Link>
            </>}
            {isLoggedIn && (
              <Nav.Link className="text-yellow" onClick={handleLogout} style={{ cursor: 'pointer' }}>
                Logout
              </Nav.Link>
            )}
          </Nav>


        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default MyNavbar;
