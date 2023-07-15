import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <label>Email address:</label>
      <div>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
          style={{ width: '100%' }}
          className="input-field"  
        />
      </div>

      <label>Password:</label>
      <div>
        <input 
          type={showPassword ? "text" : "password"} 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
          style={{ width: '100%' }} 
          className="input-field"
        />
        <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
          <input 
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
            checked={showPassword}
            style={{ marginRight: '5px' }}
          />
          <span>Show password</span>
        </div>
        <p style={{ fontSize: '14px', margin: '5px 0' }}>
          Password must be at least 8 characters long and contain at least one special character.
        </p>
      </div>

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup