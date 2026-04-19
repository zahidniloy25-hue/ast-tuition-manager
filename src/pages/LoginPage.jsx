import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../firebase'; // Ensure to set up Firebase

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth(firebaseApp);

    const handleLogin = async (event) => {
        event.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect or show successful login message
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input 
                        type='email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type='password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                {error && <p>{error}</p>}
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
