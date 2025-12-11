import { useEffect, useState } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'

export default function ToastManager() {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const handler = (e) => {
      const { message, variant = 'primary', delay = 3000 } = e.detail || {}
      const id = Date.now() + Math.random()
      const t = { id, message, variant, delay, closing: false }
      setToasts((prev) => [...prev, t])

      // schedule automatic exit (manage autohide manually to allow exit animation)
      setTimeout(() => startExit(id), delay)
    }
    window.addEventListener('notify', handler)
    return () => window.removeEventListener('notify', handler)
  }, [])

  const startExit = (id) => {
    // mark toast as closing to trigger exit animation
    setToasts((prev) => prev.map(t => t.id === id ? { ...t, closing: true } : t))
    // remove after animation duration
    setTimeout(() => remove(id), 380)
  }

  const remove = (id) => {
    setToasts((t) => t.filter(x => x.id !== id))
  }

  return (
    <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1060 }}>
      {toasts.map(toast => (
        <div key={toast.id} className={toast.closing ? 'toast-slide-exit' : 'toast-slide-enter'}>
          <Toast
            bg={toast.variant === 'primary' ? undefined : toast.variant}
            onClose={() => startExit(toast.id)}
            show={!toast.closing}
          >
            <Toast.Body>{toast.message}</Toast.Body>
          </Toast>
        </div>
      ))}
    </ToastContainer>
  )
}
