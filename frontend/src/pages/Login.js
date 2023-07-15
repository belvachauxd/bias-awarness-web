import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <div className="login-background">
      <form className="login" onSubmit={handleSubmit}>
        <h3>Log In</h3>
        
        <label>Email address: </label>
        <div>
          <input 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            style={{ width: '100%' }} 
            className="input-field"
          />
        </div>
      
        <label>Password: </label>
        <div>
          <input 
            type={showPassword ? "text" : "password"} 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            style={{ width: '100%' }}
            className="input-field"
          />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
          <input 
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
            checked={showPassword}
            style={{ marginRight: '5px' }}
          />
          <span>Show password</span>
        </div>
        
        <button disabled={isLoading}>Log in</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  )
}

export default Login