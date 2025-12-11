import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Form, ListGroup } from 'react-bootstrap'
import { isLoggedIn, getUser } from '../utils/auth'

export default function News() {
  // Placeholder news items — replace with fetched data later if needed
  const news = [
    {
      id: 1,
      title: 'NEOM announces new infrastructure milestone',
      date: '2025-12-01',
      summary: 'Construction advances across THE LINE and Oxagon with sustainable materials.'
    },
    {
      id: 2,
      title: 'Tech partnership to accelerate AI research',
      date: '2025-11-15',
      summary: 'NEOM partners with leading research institutions to advance AI for smart cities.'
    },
    {
      id: 3,
      title: 'New opportunities for hospitality in Sindalah',
      date: '2025-10-30',
      summary: 'A wave of hospitality openings aims to boost premium tourism in the Red Sea.'
    }
  ]

  // local state for likes/comments persisted in sessionStorage under key 'newsData'
  const [newsData, setNewsData] = useState({})
  const [commentInputs, setCommentInputs] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('newsData')
      const parsed = raw ? JSON.parse(raw) : {}
      setNewsData(parsed)
    } catch (e) {
      setNewsData({})
    }
  }, [])

  useEffect(() => {
    // persist changes
    sessionStorage.setItem('newsData', JSON.stringify(newsData))
  }, [newsData])

  const ensureItem = (id) => {
    if (!newsData[id]) {
      setNewsData(prev => ({ ...prev, [id]: { likes: 0, likedBy: [], comments: [] } }))
      return { likes: 0, likedBy: [], comments: [] }
    }
    return newsData[id]
  }

  const handleLike = (id) => {
    if (!isLoggedIn()) {
      // show non-blocking toast then redirect to auth
      window.dispatchEvent(new CustomEvent('notify', { detail: { message: 'Please sign in to like feed items', variant: 'warning', delay: 2000 } }))
      setTimeout(() => navigate('/auth'), 800)
      return
    }
    const user = getUser()
    setNewsData(prev => {
      const item = prev[id] ? { ...prev[id] } : { likes: 0, likedBy: [], comments: [] }
      const already = item.likedBy.includes(user.email)
      if (already) {
        item.likedBy = item.likedBy.filter(e => e !== user.email)
        item.likes = Math.max(0, item.likes - 1)
      } else {
        item.likedBy = [...item.likedBy, user.email]
        item.likes = (item.likes || 0) + 1
      }
      return { ...prev, [id]: item }
    })
  }

  const handleCommentChange = (id, value) => {
    setCommentInputs(prev => ({ ...prev, [id]: value }))
  }

  const handleCommentSubmit = (id, e) => {
    e.preventDefault()
    if (!isLoggedIn()) {
      // show non-blocking toast then redirect to auth
      window.dispatchEvent(new CustomEvent('notify', { detail: { message: 'Please sign in to comment', variant: 'warning', delay: 2000 } }))
      setTimeout(() => navigate('/auth'), 800)
      return
    }
    const text = (commentInputs[id] || '').trim()
    if (!text) return
    const user = getUser()
    const comment = {
      id: Date.now(),
      user: { name: user.name, email: user.email },
      text,
      date: new Date().toISOString()
    }
    setNewsData(prev => {
      const item = prev[id] ? { ...prev[id] } : { likes: 0, likedBy: [], comments: [] }
      item.comments = [comment, ...item.comments]
      return { ...prev, [id]: item }
    })
    setCommentInputs(prev => ({ ...prev, [id]: '' }))
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">News</h1>
        </Col>
      </Row>

      <Row className="g-4">
        {news.map(item => {
          const data = newsData[item.id] || { likes: 0, likedBy: [], comments: [] }
          const liked = isLoggedIn() && data.likedBy.includes(getUser()?.email)
          return (
            <Col key={item.id} xs={12} md={6} lg={4}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle className="mb-2">{item.date}</Card.Subtitle>
                  <Card.Text className="muted">{item.summary}</Card.Text>
                </Card.Body>
                <Card.Body className="pt-0">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div>
                      <Button
                        variant={liked ? 'primary' : 'outline-primary'}
                        size="sm"
                        onClick={() => handleLike(item.id)}
                      >
                        {liked ? 'Liked' : 'Like'}
                      </Button>
                      <span className="ms-2">{data.likes || 0} {data.likes === 1 ? 'like' : 'likes'}</span>
                    </div>
                  </div>

                  <div>
                    <h6 className="mb-2">Comments</h6>
                    {data.comments && data.comments.length > 0 ? (
                      <ListGroup variant="flush" className="mb-2">
                        {data.comments.map(c => (
                          <ListGroup.Item key={c.id} className="py-2">
                            <strong>{c.user?.name || c.user?.email}</strong>{' '}
                            <small >• {new Date(c.date).toLocaleString()}</small>
                            <div className="mt-1">{c.text}</div>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    ) : (
                      <div className="mb-2">No comments yet</div>
                    )}

                    {isLoggedIn() ? (
                      <Form onSubmit={(e) => handleCommentSubmit(item.id, e)}>
                        <Form.Group className="mb-2">
                          <Form.Control
                            as="textarea"
                            rows={2}
                            placeholder="Write a comment..."
                            value={commentInputs[item.id] || ''}
                            onChange={(e) => handleCommentChange(item.id, e.target.value)}
                          />
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                          <Button type="submit" size="sm">Post</Button>
                        </div>
                      </Form>
                    ) : (
                      <div>Sign in to like or comment.</div>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
