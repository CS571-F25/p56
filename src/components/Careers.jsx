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
          <h1 className="text-center mb-4">Careers</h1>
          <Tabs defaultActiveKey="technology" className="mb-3">
            <Tab eventKey="technology" title="Technology">
              <h2 className="mt-3">Technology</h2>
              {jobsBySector.technology.map((job, index) => (
                <JobListing key={index} {...job} />
              ))}
            </Tab>
            <Tab eventKey="engineering" title="Engineering">
              <h2 className="mt-3">Engineering</h2>
              {jobsBySector.engineering.map((job, index) => (
                <JobListing key={index} {...job} />
              ))}
            </Tab>
            <Tab eventKey="hospitality" title="Hospitality">
              <h2 className="mt-3">Hospitality</h2>
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