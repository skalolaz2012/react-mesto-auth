import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = ({ onRegister }) => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onRegister(formValue.email, formValue.password)
  }

  return (
    <div className="auth">
      <p className="auth__welcome">Регистрация</p>
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
            Зарегистрироваться
          </button>
        </div>
      </form>
      <div className="auth__signin">
        <p>
          Уже зарегистрированы?{' '}
          <Link to="sign-in" className="auth__login-link">
            Войти
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
