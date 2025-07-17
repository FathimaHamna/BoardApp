import React from 'react';
import { Search, Plus, User, Settings } from 'lucide-react';

export const DashboardHeader: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-black">Sport Xi Project</h1>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">In Progress</span>
            </div>
            <p className="text-sm text-gray-500">Event production</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Create new board</span>
          </button>
          
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-4 mt-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Assigned:</span>
          <div className="flex -space-x-1">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center">
                <User className="w-3 h-3 text-gray-600" />
              </div>
            ))}
            <div className="w-6 h-6 bg-gray-800 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs">+4</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Manage</span>
          <Settings className="w-4 h-4 text-gray-400" />
        </div>
        
        <div className="text-sm text-gray-500">
          Last updated on 04 April 2022
        </div>
      </div>
    </div>
  );
};