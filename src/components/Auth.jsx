import { useState } from 'react'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function Auth() {
  const [activeTab, setActiveTab] = useState('login')

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-3"
          >
            <Tab eventKey="login" title="Login">
              <LoginForm onSwitchToRegister={() => setActiveTab('register')} />
            </Tab>
            <Tab eventKey="register" title="Register">
              <RegisterForm onSwitchToLogin={() => setActiveTab('login')} />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}