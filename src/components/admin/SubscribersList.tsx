
import React, { useState, useEffect } from 'react';

interface Subscriber {
  email: string;
  date: string;
}

const SubscribersList = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);

  useEffect(() => {
    // Fetch subscribers from localStorage
    const savedSubscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
    setSubscribers(savedSubscribers);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-india-blue mb-6">Newsletter Subscribers</h2>
      
      {subscribers.length === 0 ? (
        <p className="text-gray-500">No subscribers yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subscription Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {subscribers.map((subscriber, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {subscriber.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(subscriber.date).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SubscribersList;
