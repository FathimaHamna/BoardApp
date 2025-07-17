export type SidebarSection = 'boards' | 'creativeRoutes' | 'deploymentReport' | 'sportXi' | 'wordpressTheme';

export interface Task {
  id: number;
  title: string;
  category: string;
  categoryColor: string;
  assignees: string[];
  dueDate: string | null;
  comments: number;
  attachments: number;
  hasImage?: boolean;
}

export interface KanbanColumn {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
}

export interface SidebarExpandedState {
  boards: boolean;
  creativeRoutes: boolean;
  deploymentReport: boolean;
  sportXi: boolean;
  wordpressTheme: boolean;
}

export interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  hasNotification?: boolean;
  children?: React.ReactNode;
  isExpandable?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
}