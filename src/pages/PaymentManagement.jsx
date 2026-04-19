import React from 'react';

const PaymentManagement = () => {
    // Sample payment status data
    const payments = [
        { id: 1, name: 'John Doe', status: 'Paid' },
        { id: 2, name: 'Jane Smith', status: 'Pending' },
        { id: 3, name: 'Sam Brown', status: 'Overdue' },
    ];

    // SMS integration function (mock)
    const sendSMS = (phoneNumber, message) => {
        console.log(`Sending SMS to ${phoneNumber}: ${message}`);
        // Integration with SMS service goes here.
    };

    // Bulk reminder function
    const sendBulkReminders = () => {
        payments.forEach(payment => {
            if (payment.status === 'Pending' || payment.status === 'Overdue') {
                sendSMS("+8801234567890", `Reminder: Your payment status is ${payment.status} for ${payment.name}`);
            }
        });
    };

    return (
        <div>
            <h1>Payment Management</h1>
            <button onClick={sendBulkReminders}>Send Bulk Reminders</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map(payment => (
                        <tr key={payment.id}>
                            <td>{payment.name}</td>
                            <td>{payment.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Total Amount: ৳{payments.length * 1000}</h2> {/* Assuming each payment is ৳1000 */}
        </div>
    );
};

export default PaymentManagement;