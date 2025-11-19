import { Card, Button, Row, Col } from 'react-bootstrap'

export default function JobListing({ title, location, type }) {
  const handleApply = () => {
    if (sessionStorage.getItem('user')) {
      alert(`Applied for ${title} successfully!`)
    } else {
      alert('Please login to apply')
      window.location.hash = '#/auth'
    }
  }

  return (
    <Card className="mb-3">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Location: {location}<br />
              Type: {type}
            </Card.Text>
          </Col>
          <Col xs="auto" className="d-flex align-items-center">
            <Button variant="primary" onClick={handleApply}>
              Apply Now
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}