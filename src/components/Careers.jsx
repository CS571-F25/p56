import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import JobListing from './JobListing'

export default function Careers() {
  const jobsBySector = {
    technology: [
      { title: "AI Researcher", location: "THE LINE", type: "Full-time" },
      { title: "Software Engineer", location: "Oxagon", type: "Full-time" },
      { title: "Data Scientist", location: "THE LINE", type: "Contract" }
    ],
    engineering: [
      { title: "Civil Engineer", location: "Trojena", type: "Full-time" },
      { title: "Mechanical Engineer", location: "Oxagon", type: "Full-time" }
    ],
    hospitality: [
      { title: "Hotel Manager", location: "Sindalah", type: "Full-time" },
      { title: "Tourism Director", location: "Trojena", type: "Contract" }
    ]
  }

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Careers at NEOM</h1>
          <Tabs defaultActiveKey="technology" className="mb-3">
            <Tab eventKey="technology" title="Technology">
              {jobsBySector.technology.map((job, index) => (
                <JobListing key={index} {...job} />
              ))}
            </Tab>
            <Tab eventKey="engineering" title="Engineering">
              {jobsBySector.engineering.map((job, index) => (
                <JobListing key={index} {...job} />
              ))}
            </Tab>
            <Tab eventKey="hospitality" title="Hospitality">
              {jobsBySector.hospitality.map((job, index) => (
                <JobListing key={index} {...job} />
              ))}
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}