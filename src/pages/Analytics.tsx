import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const visitorData = [
    { name: 'Jan', visitors: 4000 },
    { name: 'Feb', visitors: 3000 },
    { name: 'Mar', visitors: 2000 },
    { name: 'Apr', visitors: 2780 },
    { name: 'May', visitors: 1890 },
    { name: 'Jun', visitors: 2390 },
  ];

  const satisfactionData = [
    { name: 'Jan', satisfaction: 4.2 },
    { name: 'Feb', satisfaction: 4.5 },
    { name: 'Mar', satisfaction: 4.3 },
    { name: 'Apr', satisfaction: 4.6 },
    { name: 'May', satisfaction: 4.8 },
    { name: 'Jun', satisfaction: 4.7 },
  ];

  const exhibitPopularityData = [
    { name: 'Ancient Artifacts', value: 400 },
    { name: 'Modern Art', value: 300 },
    { name: 'Natural History', value: 300 },
    { name: 'Science & Tech', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const popularTopics = [
    { topic: 'Viking Age', count: 1250 },
    { topic: 'Danish Royal Family', count: 980 },
    { topic: 'Danish Design', count: 850 },
    { topic: 'Hans Christian Andersen', count: 720 },
    { topic: 'Danish Cuisine', count: 650 },
  ];

  const popularQuestions = [
    { question: "What was life like during the Viking Age?", count: 450 },
    { question: "Who are the current members of the Danish Royal Family?", count: 380 },
    { question: "What are the key principles of Danish design?", count: 320 },
    { question: "What inspired Hans Christian Andersen's fairy tales?", count: 290 },
    { question: "What are traditional Danish dishes?", count: 250 },
  ];

  const CustomXAxis = (props) => <XAxis {...props} />;
  const CustomYAxis = (props) => <YAxis {...props} />;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Visitor Analytics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Monthly Visitors</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={visitorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <CustomXAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
              <CustomYAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="visitors" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Visitor Satisfaction</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={satisfactionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <CustomXAxis dataKey="name" padding={{ left: 10, right: 10 }} />
              <CustomYAxis domain={[0, 5]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="satisfaction" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Exhibit Popularity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={exhibitPopularityData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {exhibitPopularityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Key Metrics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium">Average Visit Duration</h3>
              <p className="text-3xl font-bold">1h 45m</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Most Popular Exhibit</h3>
              <p className="text-3xl font-bold">Ancient Artifacts</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Repeat Visitors</h3>
              <p className="text-3xl font-bold">22%</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Audio Guide Usage</h3>
              <p className="text-3xl font-bold">78%</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Most Popular Topics</h2>
          <ul className="space-y-2">
            {popularTopics.map((topic, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{topic.topic}</span>
                <span className="font-semibold">{topic.count} queries</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Most Asked Questions</h2>
          <ul className="space-y-2">
            {popularQuestions.map((question, index) => (
              <li key={index} className="flex flex-col">
                <span className="text-sm font-medium">{question.question}</span>
                <span className="text-xs text-gray-500">{question.count} times asked</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Analytics;