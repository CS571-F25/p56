import { Container, Row, Col, Button, Card } from 'react-bootstrap'

export default function Home() {
  return (
    <Container fluid className="p">
      {/* Hero Section (background image placed in a blurred layer behind the content) */}
      <Row className="hero-row text-white position-relative p-0">
        <div
          className="hero-bg"
          style={{
            backgroundImage: `url('https://gulfmagazine.co/wp-content/uploads/2025/02/neom-constructio-4.jpg')`,
          }}
        />
        <div className="hero-overlay" />
        <Col className="text-center py-5 hero-content">
          <h1 className="display-4">Welcome to NEOM</h1>
          <p className="lead">The future of living, today</p>
          <Button variant="outline-light" size="lg" href="#/vision">
            Discover Our Vision
          </Button>
        </Col>
      </Row>

      {/* Features Section */}
      <Container className="my-5">
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <Card.Title>Sectors</Card.Title>
                <Card.Text>
                  Explore the innovative sectors that make up NEOM's vision for the future.
                </Card.Text>
                <Button variant="outline-primary" href="#/sectors">
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <Card.Title>Careers</Card.Title>
                <Card.Text>
                  Join our team and be part of building the future across various sectors.
                </Card.Text>
                <Button variant="outline-primary" href="#/careers">
                  View Jobs
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <Card.Title>Join Us</Card.Title>
                <Card.Text>
                  Register to apply for positions and stay updated with NEOM's developments.
                </Card.Text>
                <Button variant="outline-primary" href="#/auth">
                  Register/Login
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}