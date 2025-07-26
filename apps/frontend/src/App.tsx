import { useState } from 'react';
import { validateEmail, formatMessage, TEST_CONFIG } from '@platform/shared-utils';
import type { User } from '@platform/shared-types';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [user] = useState<User>({
    id: '1',
    email: 'test@example.com',
    name: 'Test User'
  });

  return (
    <div className="App">
      <h1>{TEST_CONFIG.APP_NAME}</h1>
      <p>Version: {TEST_CONFIG.VERSION}</p>
      
      <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
        <h3>Test Shared Utils:</h3>
        <input
          type="email"
          placeholder="Enter email to test validation"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px', marginRight: '10px', width: '250px' }}
        />
        <p>{formatMessage(`Email valid: ${validateEmail(email)}`)}</p>
      </div>

      <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
        <h3>Test Shared Types:</h3>
        <p>User ID: {user.id}</p>
        <p>User Email: {user.email}</p>
        <p>Your Name: {user.name}</p>
      </div>
    </div>
  );
}

export default App;