import React from 'react';
import { Column } from './Column';
import { KanbanColumn } from '../../types/dashboard';

interface KanbanBoardProps {
  columns: KanbanColumn[];
}

export const KanbanBoard: React.FC<KanbanBoardProps> = ({ columns }) => (
  <div className="flex-1 p-6 overflow-x-auto">
    <div className="flex space-x-6 min-w-max">
      {columns.map(column => (
        <Column key={column.id} column={column} />
      ))}
    </div>
  </div>
);