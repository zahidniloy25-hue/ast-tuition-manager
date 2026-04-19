import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h1>Main Dashboard</h1>
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </nav>
            <div>
                <h2>Welcome to the Dashboard!</h2>
                <p>This is your main page where you can navigate to other sections.</p>
            </div>
        </div>
    );
};

export default Dashboard;