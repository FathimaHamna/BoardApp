import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { TaskCard } from './TaskCard';
import { KanbanColumn } from '../../types/dashboard';

interface ColumnProps {
  column: KanbanColumn;
}

export const Column: React.FC<ColumnProps> = ({ column }) => (
  <div className="bg-gray-50 rounded-lg p-4 min-w-72">
    <div className="flex items-center justify-between mb-4">
      <h2 className="font-semibold text-gray-900">{column.title}</h2>
      {/* <h2 className="font-semibold text-gray-900">{column.title}</h2> */}
      <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
    </div>
    
    <div className="space-y-2">
      {column.tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  </div>
);