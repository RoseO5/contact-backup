'use client';

import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    alert('✅ Registration successful!\n\nNext step: Pay ₦100/month via Paystack (coming soon)');
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-indigo-800 mb-6 text-center">
          🔐 Create Account
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="••••••••"
              required
              minLength="6"
            />
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded mb-6">
            <p className="text-sm text-yellow-800">
              💡 After signup, you'll pay just <span className="font-bold">₦100/month</span> to backup contacts safely.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-200 disabled:opacity-70"
          >
            {loading ? 'Creating account...' : '✅ Create Account (₦100/month)'}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6 text-sm">
          Already have an account? <a href="/login" className="text-indigo-600 hover:underline">Log in</a>
        </p>
      </div>
    </main>
  );
}
