import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { SidebarItemProps } from '../../types/dashboard';

export const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  isActive = false, 
  hasNotification = false, 
  children, 
  isExpandable = false, 
  isExpanded = false, 
  onToggle 
}) => (
  <div>
    <div
      className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
        isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
      }`}
      onClick={onToggle}
    >
      <div className="flex items-center space-x-3">
        {icon}
        <span className="text-sm font-medium">{label}</span>
        {hasNotification && (
          <span className="bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            1
          </span>
        )}
      </div>
      {isExpandable && (
        isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
      )}
    </div>
    {isExpanded && children && (
      <div className="ml-6 mt-1 space-y-1">
        {children}
      </div>
    )}
  </div>
);