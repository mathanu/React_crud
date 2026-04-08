import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (
    <div className="container my-3">
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">CRUD APP </Navbar.Brand>
        <Navbar.Brand href="/">EMPLOYEE </Navbar.Brand>
   
          <Nav>
          
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
            {/* <Nav.Link href="/update/:id">Update</Nav.Link> */}
          </Nav>

      </Container>
    </Navbar>
    </div>
  );
}

export default Header;