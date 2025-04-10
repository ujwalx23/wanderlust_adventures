
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface Subscriber {
  email: string;
  date: string;
}

const SubscribersList = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load subscribers from localStorage
    const loadSubscribers = () => {
      setIsLoading(true);
      try {
        const storedSubscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
        setSubscribers(storedSubscribers);
      } catch (error) {
        console.error('Failed to load subscribers:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSubscribers();
  }, []);

  const handleExport = () => {
    // Create CSV content
    const csvContent = 
      "data:text/csv;charset=utf-8," + 
      "Email,Subscription Date\n" +
      subscribers.map(sub => `${sub.email},${new Date(sub.date).toLocaleDateString()}`).join("\n");
    
    // Create download link
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `subscribers_${new Date().toLocaleDateString()}.csv`);
    document.body.appendChild(link);
    
    // Trigger download
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Newsletter Subscribers</CardTitle>
        <Button 
          onClick={handleExport}
          disabled={subscribers.length === 0}
          className="bg-india-green hover:bg-india-green/90"
        >
          Export CSV
        </Button>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p className="text-center py-4">Loading subscribers...</p>
        ) : subscribers.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <p>No subscribers yet.</p>
            <p className="text-sm mt-2">When users subscribe to your newsletter, they'll appear here.</p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Date Subscribed</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subscribers.map((subscriber, index) => (
                <TableRow key={index}>
                  <TableCell>{subscriber.email}</TableCell>
                  <TableCell>{new Date(subscriber.date).toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default SubscribersList;
