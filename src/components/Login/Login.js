import { useState } from 'react'

const Login = ({ onLogin }) => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(formValue.email, formValue.password)
  }

  return (
    <div className="auth">
      <h3 className="auth__welcome">Вход</h3>
      <form onSubmit={handleSubmit} className="auth__form" noValidate>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          minLength="2"
          maxLength="60"
          className="auth__input auth__input_type_email"
          id="email-input"
          value={formValue.email}
          onChange={(e) => {
            const { name, value } = e.target
            setFormValue({
              ...formValue,
              [name]: value,
            })
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          required
          minLength="5"
          maxLength="40"
          className="auth__input auth__input_type_password"
          id="password-input"
          value={formValue.password}
          onChange={(e) => {
            const { name, value } = e.target
            setFormValue({
              ...formValue,
              [name]: value,
            })
          }}
        />
        <div className="auth__button-container">
          <button type="submit" className="auth__link">
            Войти
          </button>
        </div>
      </form>
      
    </div>
  )
}

export default Login
