import { Card, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { isLoggedIn } from '../utils/auth'

export default function JobListing({ title, location, type }) {
  const navigate = useNavigate()

  const handleApply = () => {
    if (isLoggedIn()) {
      window.dispatchEvent(new CustomEvent('notify', { detail: { message: `Applied for ${title} successfully!`, variant: 'success', delay: 2500 } }))
    } else {
      window.dispatchEvent(new CustomEvent('notify', { detail: { message: 'Please login to apply', variant: 'warning', delay: 2000 } }))
      setTimeout(() => navigate('/auth'), 700)
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