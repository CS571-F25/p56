import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { login, getUserList } from '../utils/auth'
import { useNavigate } from 'react-router-dom'

export default function LoginForm({ onSwitchToRegister }) {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const users = getUserList()
    const user = users.find(u => u.email === formData.email && u.password === formData.password)

    if (user) {
      login(user)
      window.dispatchEvent(new CustomEvent('notify', { detail: { message: 'Login successful!', variant: 'success', delay: 1800 } }))
      setTimeout(() => navigate('/'), 600)
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="w-100 mb-3">
        Login
      </Button>
    </Form>
  )
}