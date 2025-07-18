import React from 'react';
import { MessageCircle, Calendar, User, Settings, LogOut, ChevronDown } from 'lucide-react';
import { SidebarItem } from './SidebarItem';
import { SidebarSection, SidebarExpandedState } from '../../types/dashboard';

interface SidebarProps {
  sidebarExpanded: SidebarExpandedState;
  toggleSidebar: (section: SidebarSection) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ sidebarExpanded, toggleSidebar }) => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <div>
            <h1 className="font-bold text-lg text-black">Board App</h1>
            <p className="text-xs text-gray-500">Root folder</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
        </div>
      </div>

      <div className="flex-1 p-4 space-y-1">
        <SidebarItem icon={<div className="w-5 h-5 bg-gray-300 rounded"></div>} label="Dashboard" />
        
        <SidebarItem 
          icon={<div className="w-5 h-5 bg-blue-500 rounded"></div>} 
          label="Boards" 
          isActive={true}
          isExpandable={true}
          isExpanded={sidebarExpanded.boards}
          onToggle={() => toggleSidebar('boards')}
        >
          <div className="space-y-1">
            <div className="text-sm text-gray-600 px-3 py-1 cursor-pointer hover:bg-gray-50 rounded">Creative routes</div>
            <div className="text-sm text-gray-600 px-3 py-1 cursor-pointer hover:bg-gray-50 rounded">Deployment Report App</div>
            <div className="text-sm text-blue-600 px-3 py-1 cursor-pointer hover:bg-gray-50 rounded font-medium">Sport Xi Project</div>
            <div className="text-sm text-gray-600 px-3 py-1 cursor-pointer hover:bg-gray-50 rounded">Wordpress theme</div>
          </div>
        </SidebarItem>
        
        <SidebarItem 
          icon={<MessageCircle className="w-5 h-5 text-gray-400" />} 
          label="Messages" 
          hasNotification={true}
        />
        
        <SidebarItem icon={<Calendar className="w-5 h-5 text-gray-400" />} label="Calendar" />
        <SidebarItem icon={<User className="w-5 h-5 text-gray-400" />} label="Team members" />
      </div>

      <div className="border-t border-gray-200 p-4 space-y-1">
        <SidebarItem icon={<Settings className="w-5 h-5 text-gray-400" />} label="Support" />
        <SidebarItem icon={<LogOut className="w-5 h-5 text-gray-400" />} label="Logout" />
      </div>
    </div>
  );
};