import { KanbanColumn } from '../types/dashboard';

export const kanbanColumns: KanbanColumn[] = [
  {
    id: 'todo',
    title: 'To Do',
    color: 'bg-gray-100',
    tasks: [
      {
        id: 1,
        title: 'User Interview',
        category: 'Research',
        categoryColor: 'bg-blue-100 text-blue-800',
        assignees: ['/api/placeholder/24/24'],
        dueDate: 'Tomorrow',
        comments: 2,
        attachments: 1
      },
      {
        id: 2,
        title: 'Design System',
        category: 'Research',
        categoryColor: 'bg-blue-100 text-blue-800',
        assignees: ['/api/placeholder/24/24'],
        dueDate: 'Tomorrow',
        comments: 1,
        attachments: 0
      },
      {
        id: 3,
        title: 'Speech',
        category: 'Research',
        categoryColor: 'bg-blue-100 text-blue-800',
        assignees: ['/api/placeholder/24/24'],
        dueDate: 'Tomorrow',
        comments: 1,
        attachments: 0
      },
      {
        id: 4,
        title: 'Wireframe',
        category: 'Research',
        categoryColor: 'bg-blue-100 text-blue-800',
        assignees: ['/api/placeholder/24/24', '/api/placeholder/24/24'],
        dueDate: null,
        comments: 0,
        attachments: 0,
        hasImage: true
      }
    ]
  },
  {
    id: 'inprogress',
    title: 'In Progress',
    color: 'bg-orange-100',
    tasks: [
      {
        id: 5,
        title: 'UI Design',
        category: 'Research',
        categoryColor: 'bg-blue-100 text-blue-800',
        assignees: ['/api/placeholder/24/24'],
        dueDate: 'Tomorrow',
        comments: 3,
        attachments: 1
      },
      {
        id: 6,
        title: 'Check Clients feedback',
        category: 'Research',
        categoryColor: 'bg-blue-100 text-blue-800',
        assignees: ['/api/placeholder/24/24', '/api/placeholder/24/24'],
        dueDate: '22 April 2022',
        comments: 0,
        attachments: 0,
        hasImage: true
      },
      {
        id: 7,
        title: 'Copyright',
        category: 'Research',
        categoryColor: 'bg-blue-100 text-blue-800',
        assignees: ['/api/placeholder/24/24'],
        dueDate: '22 April 2022',
        comments: 0,
        attachments: 0
      },
      {
        id: 8,
        title: 'Filter sorting',
        category: 'Research',
        categoryColor: 'bg-blue-100 text-blue-800',
        assignees: ['/api/placeholder/24/24'],
        dueDate: null,
        comments: 0,
        attachments: 0
      }
    ]
  },
  {
    id: 'approved',
    title: 'Approved',
    color: 'bg-green-100',
    tasks: [
      {
        id: 9,
        title: 'Prototype',
        category: 'Research',
        categoryColor: 'bg-blue-100 text-blue-800',
        assignees: ['/api/placeholder/24/24'],
        dueDate: 'Tomorrow',
        comments: 2,
        attachments: 1
      },
      {
        id: 10,
        title: 'Detail Page',
        category: 'Research',
        categoryColor: 'bg-blue-100 text-blue-800',
        assignees: ['/api/placeholder/24/24'],
        dueDate: 'Tomorrow',
        comments: 1,
        attachments: 0,
        hasImage: true
      },
      {
        id: 11,
        title: 'Animation preloaders',
        category: 'Research',
        categoryColor: 'bg-blue-100 text-blue-800',
        assignees: ['/api/placeholder/24/24'],
        dueDate: 'Tomorrow',
        comments: 1,
        attachments: 0
      },
      {
        id: 12,
        title: 'Sorting category',
        category: 'Research',
        categoryColor: 'bg-blue-100 text-blue-800',
        assignees: ['/api/placeholder/24/24', '/api/placeholder/24/24'],
        dueDate: null,
        comments: 0,
        attachments: 0
      }
    ]
  },
  {
    id: 'reject',
    title: 'Reject',
    color: 'bg-red-100',
    tasks: [
      {
        id: 13,
        title: 'Group Management',
        category: 'Research',
        categoryColor: 'bg-blue-100 text-blue-800',
        assignees: ['/api/placeholder/24/24'],
        dueDate: 'Tomorrow',
        comments: 1,
        attachments: 0
      },
      {
        id: 14,
        title: 'Design System',
        category: 'Research',
        categoryColor: 'bg-blue-100 text-blue-800',
        assignees: ['/api/placeholder/24/24'],
        dueDate: 'Tomorrow',
        comments: 1,
        attachments: 0
      },
      {
        id: 15,
        title: 'Slider controls',
        category: 'Research',
        categoryColor: 'bg-blue-100 text-blue-800',
        assignees: ['/api/placeholder/24/24'],
        dueDate: 'Tomorrow',
        comments: 1,
        attachments: 0
      },
      {
        id: 16,
        title: 'Slider controls',
        category: 'Research',
        categoryColor: 'bg-blue-100 text-blue-800',
        assignees: ['/api/placeholder/24/24'],
        dueDate: null,
        comments: 0,
        attachments: 0,
        hasImage: true
      }
    ]
  }
];