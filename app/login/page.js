'use client';
import './local.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import * as jwt_decode from 'jwt-decode';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await fetch('/lib/login', {
        method: 'POST',
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        const decoded = decodeToken(data.token);
        console.log("Decoded token: ", decoded);
        localStorage.setItem('token', data.token);
        if(decoded.role==='admin'){
          router.push('/admin');
        }
        else{
          router.push('/dashboard');
        }
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  function decodeToken(token) {
    const payload = token.split('.')[1];
    const decoded = JSON.parse(atob(payload));
    return decoded;
  }

  return (
    <div className='login-body-div'>
      <div className='top-para'>
        <h1 className='heading-1'>Welcome Back</h1>
        <p className='login-para'>Sign in to access your task management dashboard</p>
      </div>
      <form className='login-form' onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        {error && <div className='error-message'>{error}</div>}
        <input 
          placeholder="Username" 
          className='username-input' 
          value={username} 
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input 
          placeholder="Password" 
          className='password-input' 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className='login-button'>
          Sign In
        </button>
      </form>
    </div>
  );
}
