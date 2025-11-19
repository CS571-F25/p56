import { Card } from 'react-bootstrap'

export default function SectorCard({ title, description, image }) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}