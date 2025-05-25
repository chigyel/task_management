'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './local.css'

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const res = await fetch('/lib/register', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        router.push('/login');
      } else {
        setError(data.error || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className='register-body-div'>
      <div className='top-para'>
        <h1 className='heading-1'>Create Account</h1>
        <p className='register-para'>Join us to start managing your tasks efficiently</p>
      </div>
      <form className='register-form' onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
        {error && <div className='error-message'>{error}</div>}
        <input 
          placeholder="Full Name" 
          className='register-input' 
          value={form.name} 
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        />
        <input 
          placeholder="Username" 
          className='register-input' 
          value={form.username} 
          onChange={e => setForm({ ...form, username: e.target.value })}
          required
        />
        <input 
          placeholder="Email" 
          className='register-input' 
          type="email"
          value={form.email} 
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
        />
        <input 
          placeholder="Password" 
          className='register-input' 
          type="password" 
          value={form.password} 
          onChange={e => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit" className='register-button'>
          Create Account
        </button>
      </form>
    </div>
  );
}