// Framework
import React, { Component } from 'react';
import { Link } from 'react-router';

// Components
import { Container, Row, Col as Column, Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import LoginButton from './LoginButton.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState(({ navbarOpen }) => ({ navbarOpen: !navbarOpen }));
  }

  render() {
    return (
      <Container className="px-0" fluid >
        <Navbar color="faded" className="mb-4" light toggleable>
          <NavbarToggler right onClick={this.toggleNavbar} />
          <Link to="/"><h3 className="mb-0">Podcatcher</h3></Link>
          <Collapse isOpen={this.state.navbarOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="mx-2">
                <Link to="/discover/">Discover</Link>
              </NavItem>
              <NavItem className="mx-2">
                <Link to="/search/">Search</Link>
              </NavItem>
              <NavItem className="mx-2">
                <LoginButton />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Container>
          <Row>
            <Column>
              {this.props.children}
            </Column>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default App;
