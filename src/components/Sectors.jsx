import { Container, Row, Col } from 'react-bootstrap'
import SectorCard from './SectorCard'

export default function Sectors() {
  const sectors = [
    {
      title: "THE LINE",
      description: "A revolution in urban living with no cars, no roads, and zero carbon emissions.",
      image: "https://neom.scene7.com/is/image/neom/line-bottom-desktop?wid=1920&hei=1065"
    },
    {
      title: "Oxagon",
      description: "The floating industrial city that will redefine the traditional industrial model.",
      image: "https://www.neom.com/content/dam/neom/new-oxagon-2024/hero-image.jpg"
    },
    {
      title: "Trojena",
      description: "The mountain destination offering outdoor skiing and adventure sports year-round.",
      image: "https://www.neom.com/content/dam/neom/trojena/revised-assets/new/trojena-ski.jpg"
    },
    {
      title: "Sindalah",
      description: "The luxury island destination in the Red Sea for yachting and premium tourism.",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Sindalah_Illustartion.png"
    }
  ]

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Our Sectors</h1>
          <Row>
            {sectors.map((sector, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <SectorCard {...sector} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}