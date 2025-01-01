import React, { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';

const wishes = [
  "May this year bring endless opportunities and beautiful moments.",
  "Wishing you 365 days of success, happiness, and prosperity.",
  "May your dreams take flight and your spirit soar high this year.",
  "Here's to new adventures, meaningful connections, and joyful celebrations.",
  "May this year fill your life with bright moments and wonderful surprises.",
  "Wishing you peace, love, and laughter in abundance this year."
];

export function NewYearForm() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }

    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    setGreeting(randomWish);
    setIsSubmitted(true);
    setError('');
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-yellow-400">
            <Sparkles className="w-6 h-6" />
            <h1>New Year Greetings</h1>
            <Sparkles className="w-6 h-6" />
          </div>
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Your Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm 
                       focus:border-yellow-500 focus:ring-yellow-500 px-4 py-2 border transition duration-150 ease-in-out"
              placeholder="Enter your name"
            />
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium 
                     text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 
                     focus:ring-yellow-500 transition duration-150 ease-in-out space-x-2"
          >
            <span>Send Greeting</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      ) : (
        <div className="text-center space-y-4 animate-fade-in">
          <div className="flex items-center justify-center space-x-2">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-yellow-400">Happy New Year, {name}!</h2>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>
          
          <p className="text-lg text-gray-300 italic">
            "{greeting}"
          </p>
          
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-4 px-4 py-2 text-sm font-medium text-yellow-400 hover:text-yellow-300 
                     focus:outline-none focus:underline transition duration-150 ease-in-out"
          >
            Send Another Greeting
          </button>
        </div>
      )}
    </div>
  );
}