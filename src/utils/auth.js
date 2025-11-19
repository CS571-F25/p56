export function getUser() {
  try {
    return JSON.parse(sessionStorage.getItem('user'))
  } catch (e) {
    return null
  }
}

export function isLoggedIn() {
  return !!sessionStorage.getItem('user')
}

export function login(user) {
  sessionStorage.setItem('user', JSON.stringify(user))
  window.dispatchEvent(new Event('authChange'))
}

export function logout() {
  sessionStorage.removeItem('user')
  window.dispatchEvent(new Event('authChange'))
}

export function saveUserList(users) {
  sessionStorage.setItem('users', JSON.stringify(users))
}

export function getUserList() {
  return JSON.parse(sessionStorage.getItem('users') || '[]')
}
