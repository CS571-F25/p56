import { Container, Row, Col, Card } from 'react-bootstrap'

export default function OurVision() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Our Vision</h1>
          <Card className="p-4">
            <Card.Body>
              <Card.Title>Redefining Urban Living</Card.Title>
              <Card.Text>
                NEOM is a vision of what a New Future might look like. It's a region in northwest Saudi Arabia 
                on the Red Sea being built from the ground up as a living laboratory – a place where entrepreneurship 
                will chart the course for this New Future.
              </Card.Text>
              <Card.Text>
                NEOM will be a hub for innovation, where world's greatest minds and talents will be empowered to 
                pioneer tomorrow's technologies and industries. It will include towns and cities, ports and enterprise 
                zones, research centers, sports and entertainment venues, and tourist destinations.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}