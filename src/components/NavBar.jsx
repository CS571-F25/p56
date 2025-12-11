import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isLoggedIn, logout, getUser } from '../utils/auth'

export default function NavBar() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn())
  const [expanded, setExpanded] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onChange = () => setLoggedIn(isLoggedIn())
    window.addEventListener('authChange', onChange)
    return () => window.removeEventListener('authChange', onChange)
  }, [])

  const handleLogout = () => {
    logout()
    setExpanded(false)
    navigate('/')
  }

  const user = getUser()

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" expanded={expanded} onToggle={(exp) => setExpanded(exp)}>
      <Container>
        <Navbar.Brand href="#/" onClick={() => setExpanded(false)}>
          <img
            src="https://www.neom-property.com/wp-content/uploads/2017/11/logo.png"
            alt="NEOM logo"
            className="logo me-2"
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
          />
          NEOM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link onClick={() => setExpanded(false)}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/vision">
              <Nav.Link onClick={() => setExpanded(false)}>Vision</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sectors">
              <Nav.Link onClick={() => setExpanded(false)}>Sectors</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/news">
              <Nav.Link onClick={() => setExpanded(false)}>News</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/careers">
              <Nav.Link onClick={() => setExpanded(false)}>Careers</Nav.Link>
            </LinkContainer>
            {loggedIn ? (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : (
              <LinkContainer to="/auth">
                <Nav.Link onClick={() => setExpanded(false)}>Register/Login</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
          {loggedIn && (
            <Nav>
              <Nav.Item className="text-light ms-2 align-self-center">Logged in as {user?.name}</Nav.Item>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}