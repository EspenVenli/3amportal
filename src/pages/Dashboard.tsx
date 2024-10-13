import React from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Users, Star, Book, Smartphone, Globe, MessageSquare, Upload, Radio, Glasses, CreditCard, RefreshCw, TrendingUp, Clock, DollarSign } from 'lucide-react';

const Dashboard = () => {
  const visitorData = [
    { name: 'Jan', visitors: 4000 },
    { name: 'Feb', visitors: 3000 },
    { name: 'Mar', visitors: 2000 },
    { name: 'Apr', visitors: 2780 },
    { name: 'May', visitors: 1890 },
    { name: 'Jun', visitors: 2390 },
  ];

  const revenueData = [
    { name: 'Jan', revenue: 10000 },
    { name: 'Feb', revenue: 12000 },
    { name: 'Mar', revenue: 9000 },
    { name: 'Apr', revenue: 15000 },
    { name: 'May', revenue: 18000 },
    { name: 'Jun', revenue: 20000 },
  ];

  const exhibitEngagementData = [
    { name: 'Ancient Artifacts', value: 4000 },
    { name: 'Modern Art', value: 3000 },
    { name: 'Natural History', value: 2000 },
    { name: 'Science & Tech', value: 1000 },
  ];

  const demographicData = [
    { name: 'Local', value: 30 },
    { name: 'National', value: 45 },
    { name: 'International', value: 25 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Custom components to replace defaultProps usage
  const CustomXAxis = (props) => <XAxis {...props} />;
  const CustomYAxis = (props) => <YAxis {...props} />;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
      
      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Total Visitors</h2>
          <p className="text-3xl font-bold">12,345</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Active Tours</h2>
          <p className="text-3xl font-bold">42</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Average Rating</h2>
          <p className="text-3xl font-bold">4.8 / 5</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Visitor Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={visitorData}>
              <CustomXAxis dataKey="name" />
              <CustomYAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="visitors" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Revenue Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CustomXAxis dataKey="name" />
              <CustomYAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Exhibit Engagement</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={exhibitEngagementData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {exhibitEngagementData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Visitor Demographics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={demographicData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {demographicData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Access Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <Upload className="mr-2" /> Custom Content Management
          </h3>
          <p>Upload new exhibits and manage multilingual content.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <Radio className="mr-2" /> Guide Performance Metrics
          </h3>
          <p>Track AI guide effectiveness and popularity.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <Glasses className="mr-2" /> AR Interaction Insights
          </h3>
          <p>Analyze AR usage and optimize experiences.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <CreditCard className="mr-2" /> Subscription Management
          </h3>
          <p>Manage your service tier and add-ons.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <RefreshCw className="mr-2" /> AI Model Updates
          </h3>
          <p>View AI training status and request content refreshes.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <MessageSquare className="mr-2" /> Feedback Analysis
          </h3>
          <p>Review and analyze visitor feedback and comments.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;