import React from 'react';
import { NewYearForm } from './components/NewYearForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-xl border border-gray-700 p-6">
        <NewYearForm />
      </div>
    </div>
  );
}

export default App;