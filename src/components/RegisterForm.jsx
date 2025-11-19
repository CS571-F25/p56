import { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { saveUserList } from '../utils/auth'

export default function RegisterForm({ onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    const users = JSON.parse(sessionStorage.getItem('users') || '[]')
    
    if (users.find(u => u.email === formData.email)) {
      setError('Email already registered')
      return
    }

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    }

    users.push(newUser)
    saveUserList(users)

    // After successful registration, direct the user to the login tab
    alert('Registration successful! Please sign in.')
    onSwitchToLogin()
  }

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className="mb-3">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </Form.Group>
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
      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="w-100 mb-3">
        Register
      </Button>
      <div className="text-center">
        Already have an account?{' '}
        <Button variant="link" onClick={onSwitchToLogin}>
          Login here
        </Button>
      </div>
    </Form>
  )
}