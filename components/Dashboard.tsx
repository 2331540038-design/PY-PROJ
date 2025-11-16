
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const salesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
];

const categoryData = [
    { name: 'Laptops', value: 400 },
    { name: 'Phones', value: 300 },
    { name: 'Headphones', value: 300 },
    { name: 'Accessories', value: 200 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
                <p className="text-3xl font-bold text-primary mt-2">$1,250,340</p>
                <p className="text-sm text-green-500 mt-1">+12% from last month</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700">New Orders</h3>
                <p className="text-3xl font-bold text-primary mt-2">3,456</p>
                <p className="text-sm text-green-500 mt-1">+5.6% from last month</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700">Active Users</h3>
                <p className="text-3xl font-bold text-primary mt-2">8,921</p>
                <p className="text-sm text-red-500 mt-1">-1.2% from last month</p>
            </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Monthly Sales</h2>
            <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#007BFF" />
            </BarChart>
            </ResponsiveContainer>
      </div>

       <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Sales by Category</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={categoryData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" width={100} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#6C757D" name="Units Sold" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  );
};

export default Dashboard;
