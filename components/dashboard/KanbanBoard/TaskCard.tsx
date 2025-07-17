import React from 'react';
import { MoreHorizontal, MessageCircle, Calendar, User } from 'lucide-react';
import { Task } from '../../types/dashboard';

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => (
  <div className="bg-white rounded-lg p-3 mb-3 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-2">
      <span className={`text-xs px-2 py-1 rounded-full ${task.categoryColor}`}>
        {task.category}
      </span>
      <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
    </div>
    
    <h3 className="font-medium text-gray-900 mb-3">{task.title}</h3>
    
    {task.hasImage && (
      <div className="w-full h-20 bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
        <div className="w-6 h-6 bg-gray-500 rounded"></div>
      </div>
    )}
    
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="flex -space-x-1">
          {task.assignees.map((avatar: string, index: number) => (
            <div
              key={index}
              className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center"
            >
              <User className="w-3 h-3 text-gray-600" />
            </div>
          ))}
        </div>
        
        <div className="flex items-center space-x-1">
          {task.comments > 0 && (
            <div className="flex items-center space-x-1 text-gray-500">
              <MessageCircle className="w-3 h-3" />
              <span className="text-xs">{task.comments}</span>
            </div>
          )}
          
          {task.attachments > 0 && (
            <div className="flex items-center space-x-1 text-gray-500">
              <Calendar className="w-3 h-3" />
              <span className="text-xs">{task.attachments}</span>
            </div>
          )}
        </div>
      </div>
      
      {task.dueDate && (
        <div className="flex items-center space-x-1 text-gray-500 text-xs">
          <Calendar className="w-3 h-3" />
          <span>{task.dueDate}</span>
        </div>
      )}
    </div>
  </div>
);