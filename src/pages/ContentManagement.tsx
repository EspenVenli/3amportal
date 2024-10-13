import React, { useState } from 'react';
import { Plus, Edit, Trash } from 'lucide-react';

const ContentManagement = () => {
  const [exhibits, setExhibits] = useState([
    { id: 1, name: 'Ancient Egypt', type: 'Historical', language: 'English' },
    { id: 2, name: 'Modern Art', type: 'Art', language: 'Spanish' },
    { id: 3, name: 'Dinosaur Era', type: 'Natural History', language: 'French' },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Content Management</h1>
      <div className="mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          <Plus className="inline-block mr-2" />
          Add New Exhibit
        </button>
      </div>
      <table className="w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Type</th>
            <th className="py-3 px-6 text-left">Language</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {exhibits.map((exhibit) => (
            <tr key={exhibit.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{exhibit.name}</td>
              <td className="py-3 px-6 text-left">{exhibit.type}</td>
              <td className="py-3 px-6 text-left">{exhibit.language}</td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                  <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <Edit size={16} />
                  </button>
                  <button className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                    <Trash size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentManagement;