'use client';

import React, { useState } from 'react';
import { Sidebar } from './Sidebar/Sidebar';
import { DashboardHeader } from './Header/DashboardHeader';
import { KanbanBoard } from './KanbanBoard/KanbanBoard';
import { kanbanColumns } from './../data/kanbanData';
import { SidebarSection, SidebarExpandedState } from './../types/dashboard';

export default function Dashboard() {
  const [sidebarExpanded, setSidebarExpanded] = useState<SidebarExpandedState>({
    boards: true,
    creativeRoutes: false,
    deploymentReport: false,
    sportXi: true,
    wordpressTheme: false
  });

  const toggleSidebar = (section: SidebarSection) => {
    setSidebarExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar sidebarExpanded={sidebarExpanded} toggleSidebar={toggleSidebar} />
      
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <KanbanBoard columns={kanbanColumns} />
      </div>
    </div>
  );
}