import { RoadmapData, RoadmapNode } from '../types/RoadmapTypes';

const roadmapData: RoadmapData = {
  nodes: [
    // Main Title (Centered)
    {
      id: 'intro',
      type: 'roadmapNode',
      position: { x: 600, y: 350 },
      data: {
        id: 'intro',
        type: 'introduction',
        title: 'AWS Cloud Practitioner',
        description: 'CLF-C02 Certification Study Guide',
        githubUrl: 'https://cloudcraftsmanstudio.github.io/AWS-Cloud-Practitioner-CLF-C02-Practice-Test/',
        youtubeUrl: 'https://youtube.com/playlist?list=aws-clf-c02',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px',
          cursor: 'pointer'
        }
      },
    },

    // Domain 1: Cloud Concepts (Top Left)
    {
      id: 'domain1',
      type: 'roadmapNode',
      position: { x: 100, y: 200 },
      data: {
        id: 'domain1',
        type: 'category',
        title: 'Domain 1: Cloud Concepts',
        description: '26% of Exam'
      },
    },
    // Task statements for Domain 1 (ascending stairs from left to right)
    {
      id: 'task1.1',
      type: 'roadmapNode',
      position: { x: -50, y: 50 },
      data: {
        id: 'task1.1',
        type: 'service',
        title: 'Task Statement 1.1',
        description: 'Define the benefits of the AWS Cloud',
        githubUrl: 'https://github.com/aws-roadmap/aws-clf-c02/task-1-1',
        youtubeUrl: 'https://youtube.com/watch?v=task-1-1',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px'
        }
      },
    },
    {
      id: 'task1.2',
      type: 'roadmapNode',
      position: { x: -200, y: -100 },
      data: {
        id: 'task1.2',
        type: 'service',
        title: 'Task Statement 1.2',
        description: 'Identify design principles of the AWS Cloud',
        githubUrl: 'https://github.com/aws-roadmap/aws-clf-c02/task-1-2',
        youtubeUrl: 'https://youtube.com/watch?v=task-1-2',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px'
        }
      },
    },
    {
      id: 'task1.3',
      type: 'roadmapNode',
      position: { x: -350, y: -250 },
      data: {
        id: 'task1.3',
        type: 'service',
        title: 'Task Statement 1.3',
        description: 'Understand the benefits of and strategies for migration to the AWS Cloud',
        githubUrl: 'https://github.com/aws-roadmap/aws-clf-c02/task-1-3',
        youtubeUrl: 'https://youtube.com/watch?v=task-1-3',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px'
        }
      },
    },
    {
      id: 'task1.4',
      type: 'roadmapNode',
      position: { x: -500, y: -400 },
      data: {
        id: 'task1.4',
        type: 'service',
        title: 'Task Statement 1.4',
        description: 'Understand concepts of cloud economics',
        githubUrl: 'https://github.com/aws-roadmap/aws-clf-c02/task-1-4',
        youtubeUrl: 'https://youtube.com/watch?v=task-1-4',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px'
        }
      },
    },

    // Domain 2: Security and Compliance (Top Right)
    {
      id: 'domain2',
      type: 'roadmapNode',
      position: { x: 1100, y: 200 },
      data: {
        id: 'domain2',
        type: 'category',
        title: 'Domain 2: Security and Compliance',
        description: '25% of Exam'
      },
    },
    // Task statements for Domain 2 (ascending stairs from left to right)
    {
      id: 'task2.1',
      type: 'roadmapNode',
      position: { x: 1250, y: 50 },
      data: {
        id: 'task2.1',
        type: 'service',
        title: 'Task Statement 2.1',
        description: 'Understand the AWS shared responsibility model',
        githubUrl: 'https://github.com/aws-roadmap/aws-clf-c02/task-2-1',
        youtubeUrl: 'https://youtube.com/watch?v=task-2-1',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px'
        }
      },
    },
    {
      id: 'task2.2',
      type: 'roadmapNode',
      position: { x: 1400, y: -100 },
      data: {
        id: 'task2.2',
        type: 'service',
        title: 'Task Statement 2.2',
        description: 'Understand AWS Cloud security, governance, and compliance concepts',
        githubUrl: 'https://github.com/aws-roadmap/aws-clf-c02/task-2-2',
        youtubeUrl: 'https://youtube.com/watch?v=task-2-2',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px'
        }
      },
    },
    {
      id: 'task2.3',
      type: 'roadmapNode',
      position: { x: 1550, y: -250 },
      data: {
        id: 'task2.3',
        type: 'service',
        title: 'Task Statement 2.3',
        description: 'Identify AWS access management capabilities',
        githubUrl: 'https://github.com/aws-roadmap/aws-clf-c02/task-2-3',
        youtubeUrl: 'https://youtube.com/watch?v=task-2-3',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px'
        }
      },
    },
    {
      id: 'task2.4',
      type: 'roadmapNode',
      position: { x: 1700, y: -400 },
      data: {
        id: 'task2.4',
        type: 'service',
        title: 'Task Statement 2.4',
        description: 'Identify components and resources for security',
        githubUrl: 'https://github.com/aws-roadmap/aws-clf-c02/task-2-4',
        youtubeUrl: 'https://youtube.com/watch?v=task-2-4',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px'
        }
      },
    },

    // Domain 3: Technology and Services (Bottom Left)
    {
      id: 'domain3',
      type: 'roadmapNode',
      position: { x: 100, y: 500 },
      data: {
        id: 'domain3',
        type: 'category',
        title: 'Domain 3: Cloud Technology and Services',
        description: '33% of Exam'
      },
    },
    // Task statements for Domain 3 (ascending stairs from left to right)
    {
      id: 'task3.1',
      type: 'roadmapNode',
      position: { x: -50, y: 650 },
      data: {
        id: 'task3.1',
        type: 'service',
        title: 'Task Statement 3.1',
        description: 'Define methods of deploying and operating in the AWS Cloud',
        githubUrl: 'https://github.com/aws-roadmap/aws-clf-c02/task-3-1',
        youtubeUrl: 'https://youtube.com/watch?v=task-3-1',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px'
        }
      },
    },
    {
      id: 'task3.2',
      type: 'roadmapNode',
      position: { x: -200, y: 800 },
      data: {
        id: 'task3.2',
        type: 'service',
        title: 'Task Statement 3.2',
        description: 'Define the AWS global infrastructure',
        githubUrl: 'https://github.com/aws-roadmap/aws-clf-c02/task-3-2',
        youtubeUrl: 'https://youtube.com/watch?v=task-3-2',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px'
        }
      },
    },
    {
      id: 'task3.3',
      type: 'roadmapNode',
      position: { x: -350, y: 950 },
      data: {
        id: 'task3.3',
        type: 'service',
        title: 'Task Statement 3.3',
        description: 'Identify AWS compute services',
        githubUrl: 'https://github.com/aws-roadmap/aws-clf-c02/task-3-3',
        youtubeUrl: 'https://youtube.com/watch?v=task-3-3',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px'
        }
      },
    },
    {
      id: 'task3.4',
      type: 'roadmapNode',
      position: { x: -500, y: 1100 },
      data: {
        id: 'task3.4',
        type: 'service',
        title: 'Task Statement 3.4',
        description: 'Identify AWS database services',
        githubUrl: 'https://github.com/aws-roadmap/aws-clf-c02/task-3-4',
        youtubeUrl: 'https://youtube.com/watch?v=task-3-4',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px'
        }
      },
    },
    {
      id: 'task3.5',
      type: 'roadmapNode',
      position: { x: -650, y: 1250 },
      data: {
        id: 'task3.5',
        type: 'service',
        title: 'Task Statement 3.5',
        description: 'Identify AWS network services',
        githubUrl: 'https://github.com/aws-roadmap/aws-clf-c02/task-3-5',
        youtubeUrl: 'https://youtube.com/watch?v=task-3-5',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px'
        }
      },
    },
    {
      id: 'task3.6',
      type: 'roadmapNode',
      position: { x: -800, y: 1400 },
      data: {
        id: 'task3.6',
        type: 'service',
        title: 'Task Statement 3.6',
        description: 'Identify AWS storage services',
        githubUrl: 'https://github.com/aws-roadmap/aws-clf-c02/task-3-6',
        youtubeUrl: 'https://youtube.com/watch?v=task-3-6',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px'
        }
      },
    },
    {
      id: 'task3.7',
      type: 'roadmapNode',
      position: { x: -950, y: 1550 },
      data: {
        id: 'task3.7',
        type: 'service',
        title: 'Task Statement 3.7',
        description: 'Identify AWS artificial intelligence and machine learning (AI/ML) services and analytics services',
        githubUrl: 'https://github.com/aws-roadmap/aws-clf-c02/task-3-7',
        youtubeUrl: 'https://youtube.com/watch?v=task-3-7',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px'
        }
      },
    },
    {
      id: 'task3.8',
      type: 'roadmapNode',
      position: { x: -1100, y: 1700 },
      data: {
        id: 'task3.8',
        type: 'service',
        title: 'Task Statement 3.8',
        description: 'Identify services from other in-scope AWS service categories',
        githubUrl: 'https://github.com/aws-roadmap/aws-clf-c02/task-3-8',
        youtubeUrl: 'https://youtube.com/watch?v=task-3-8',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px'
        }
      },
    },

    // Domain 4: Billing and Pricing (Bottom Right)
    {
      id: 'domain4',
      type: 'roadmapNode',
      position: { x: 1100, y: 500 },
      data: {
        id: 'domain4',
        type: 'category',
        title: 'Domain 4: Billing, Pricing, and Support',
        description: '16% of Exam'
      },
    },
    // Task statements for Domain 4 (ascending stairs from left to right)
    {
      id: 'task4.1',
      type: 'roadmapNode',
      position: { x: 1250, y: 650 },
      data: {
        id: 'task4.1',
        type: 'service',
        title: 'Task Statement 4.1',
        description: 'Compare AWS pricing models',
        githubUrl: 'https://github.com/aws-roadmap/aws-clf-c02/task-4-1',
        youtubeUrl: 'https://youtube.com/watch?v=task-4-1',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px'
        }
      },
    },
    {
      id: 'task4.2',
      type: 'roadmapNode',
      position: { x: 1400, y: 800 },
      data: {
        id: 'task4.2',
        type: 'service',
        title: 'Task Statement 4.2',
        description: 'Understand resources for billing, budget, and cost management',
        githubUrl: 'https://github.com/aws-roadmap/aws-clf-c02/task-4-2',
        youtubeUrl: 'https://youtube.com/watch?v=task-4-2',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px'
        }
      },
    },
    {
      id: 'task4.3',
      type: 'roadmapNode',
      position: { x: 1550, y: 950 },
      data: {
        id: 'task4.3',
        type: 'service',
        title: 'Task Statement 4.3',
        description: 'Identify AWS technical resources and AWS Support options',
        githubUrl: 'https://github.com/aws-roadmap/aws-clf-c02/task-4-3',
        youtubeUrl: 'https://youtube.com/watch?v=task-4-3',
        style: { 
          backgroundColor: '#E6F3FF',
          border: '2px solid #87CEEB',
          borderRadius: '8px',
          padding: '10px'
        }
      },
    },
  ] as RoadmapNode[],
  edges: [
    // Direct connections from intro to all domains
    { 
      id: 'e1-0', 
      source: 'intro', 
      target: 'domain1', 
      type: 'custom',
      className: 'rainbow',
      data: { completed: true },
      style: { strokeWidth: 4, stroke: '#00A3FF', transition: 'all 0.5s ease-in-out' }
    },
    { 
      id: 'e2-0', 
      source: 'intro', 
      target: 'domain2', 
      type: 'custom',
      className: 'rainbow',
      data: { completed: true },
      style: { strokeWidth: 4, stroke: '#00A3FF', transition: 'all 0.5s ease-in-out' }
    },
    { 
      id: 'e3-0', 
      source: 'intro', 
      target: 'domain3', 
      type: 'custom',
      className: 'rainbow',
      data: { completed: true },
      style: { strokeWidth: 4, stroke: '#00A3FF', transition: 'all 0.5s ease-in-out' }
    },
    { 
      id: 'e4-0', 
      source: 'intro', 
      target: 'domain4', 
      type: 'custom',
      className: 'rainbow',
      data: { completed: true },
      style: { strokeWidth: 4, stroke: '#00A3FF', transition: 'all 0.5s ease-in-out' }
    },

    // Domain task connections
    { id: 'e1-1', source: 'domain1', target: 'task1.1', type: 'custom', style: { stroke: '#00A3FF', strokeWidth: 2, transition: 'all 0.5s ease-in-out' } },
    { id: 'e1-2', source: 'task1.1', target: 'task1.2', type: 'custom', style: { stroke: '#00A3FF', strokeWidth: 2, transition: 'all 0.5s ease-in-out' } },
    { id: 'e1-3', source: 'task1.2', target: 'task1.3', type: 'custom', style: { stroke: '#00A3FF', strokeWidth: 2, transition: 'all 0.5s ease-in-out' } },
    { id: 'e1-4', source: 'task1.3', target: 'task1.4', type: 'custom', style: { stroke: '#00A3FF', strokeWidth: 2, transition: 'all 0.5s ease-in-out' } },

    // Domain 2 task connections (ascending)
    { id: 'e2-1', source: 'domain2', target: 'task2.1', type: 'custom', style: { stroke: '#00A3FF', strokeWidth: 2 } },
    { id: 'e2-2', source: 'task2.1', target: 'task2.2', type: 'custom', style: { stroke: '#00A3FF', strokeWidth: 2 } },
    { id: 'e2-3', source: 'task2.2', target: 'task2.3', type: 'custom', style: { stroke: '#00A3FF', strokeWidth: 2 } },
    { id: 'e2-4', source: 'task2.3', target: 'task2.4', type: 'custom', style: { stroke: '#00A3FF', strokeWidth: 2 } },

    // Domain 3 task connections (ascending)
    { id: 'e3-1', source: 'domain3', target: 'task3.1', type: 'custom', style: { stroke: '#00A3FF', strokeWidth: 2, transition: 'all 0.5s ease-in-out' } },
    { id: 'e3-2', source: 'task3.1', target: 'task3.2', type: 'custom', style: { stroke: '#00A3FF', strokeWidth: 2, transition: 'all 0.5s ease-in-out' } },
    { id: 'e3-3', source: 'task3.2', target: 'task3.3', type: 'custom', style: { stroke: '#00A3FF', strokeWidth: 2, transition: 'all 0.5s ease-in-out' } },
    { id: 'e3-4', source: 'task3.3', target: 'task3.4', type: 'custom', style: { stroke: '#00A3FF', strokeWidth: 2, transition: 'all 0.5s ease-in-out' } },
    { id: 'e3-5', source: 'task3.4', target: 'task3.5', type: 'custom', style: { stroke: '#00A3FF', strokeWidth: 2, transition: 'all 0.5s ease-in-out' } },
    { id: 'e3-6', source: 'task3.5', target: 'task3.6', type: 'custom', style: { stroke: '#00A3FF', strokeWidth: 2, transition: 'all 0.5s ease-in-out' } },
    { id: 'e3-7', source: 'task3.6', target: 'task3.7', type: 'custom', style: { stroke: '#00A3FF', strokeWidth: 2, transition: 'all 0.5s ease-in-out' } },
    { id: 'e3-8', source: 'task3.7', target: 'task3.8', type: 'custom', style: { stroke: '#00A3FF', strokeWidth: 2, transition: 'all 0.5s ease-in-out' } },

    // Domain 4 task connections (ascending)
    { id: 'e4-1', source: 'domain4', target: 'task4.1', type: 'custom', style: { stroke: '#00A3FF', strokeWidth: 2 } },
    { id: 'e4-2', source: 'task4.1', target: 'task4.2', type: 'custom', style: { stroke: '#00A3FF', strokeWidth: 2 } },
    { id: 'e4-3', source: 'task4.2', target: 'task4.3', type: 'custom', style: { stroke: '#00A3FF', strokeWidth: 2 } },

    // Domain 1 connections
    {
      id: 'domain1-task1.1',
      source: 'domain1',
      target: 'task1.1',
      type: 'custom',
      data: { animated: false },
      style: { stroke: '#b1b1b7', strokeWidth: 3 }
    },
    {
      id: 'task1.1-task1.2',
      source: 'task1.1',
      target: 'task1.2',
      type: 'custom',
      data: { animated: false },
      style: { stroke: '#b1b1b7', strokeWidth: 1 }
    },
    {
      id: 'task1.2-task1.3',
      source: 'task1.2',
      target: 'task1.3',
      type: 'custom',
      data: { animated: false },
      style: { stroke: '#b1b1b7', strokeWidth: 1 }
    },
    {
      id: 'task1.3-task1.4',
      source: 'task1.3',
      target: 'task1.4',
      type: 'custom',
      data: { animated: false },
      style: { stroke: '#b1b1b7', strokeWidth: 1 }
    },

    // Domain 2 connections
    {
      id: 'domain2-task2.1',
      source: 'domain2',
      target: 'task2.1',
      type: 'custom',
      data: { animated: false },
      style: { stroke: '#b1b1b7', strokeWidth: 1 }
    },
    {
      id: 'task2.1-task2.2',
      source: 'task2.1',
      target: 'task2.2',
      type: 'custom',
      data: { animated: false },
      style: { stroke: '#b1b1b7', strokeWidth: 1 }
    },
    {
      id: 'task2.2-task2.3',
      source: 'task2.2',
      target: 'task2.3',
      type: 'custom',
      data: { animated: false },
      style: { stroke: '#b1b1b7', strokeWidth: 1 }
    },
    {
      id: 'task2.3-task2.4',
      source: 'task2.3',
      target: 'task2.4',
      type: 'custom',
      data: { animated: false },
      style: { stroke: '#b1b1b7', strokeWidth: 1 }
    },

    // Domain 3 connections
    {
      id: 'domain3-task3.1',
      source: 'domain3',
      target: 'task3.1',
      type: 'custom',
      style: { 
        stroke: '#00A3FF',
        strokeWidth: 2,
        transition: 'all 0.5s ease-in-out'
      }
    },
    {
      id: 'task3.1-task3.2',
      source: 'task3.1',
      target: 'task3.2',
      type: 'custom',
      style: { 
        stroke: '#00A3FF',
        strokeWidth: 2,
        transition: 'all 0.5s ease-in-out'
      }
    },
    {
      id: 'task3.2-task3.3',
      source: 'task3.2',
      target: 'task3.3',
      type: 'custom',
      style: { 
        stroke: '#00A3FF',
        strokeWidth: 2,
        transition: 'all 0.5s ease-in-out'
      }
    },
    {
      id: 'task3.3-task3.4',
      source: 'task3.3',
      target: 'task3.4',
      type: 'custom',
      style: { 
        stroke: '#00A3FF',
        strokeWidth: 2,
        transition: 'all 0.5s ease-in-out'
      }
    },
    {
      id: 'task3.4-task3.5',
      source: 'task3.4',
      target: 'task3.5',
      type: 'custom',
      style: { 
        stroke: '#00A3FF',
        strokeWidth: 2,
        transition: 'all 0.5s ease-in-out'
      }
    },
    {
      id: 'task3.5-task3.6',
      source: 'task3.5',
      target: 'task3.6',
      type: 'custom',
      style: { 
        stroke: '#00A3FF',
        strokeWidth: 2,
        transition: 'all 0.5s ease-in-out'
      }
    },
    {
      id: 'task3.6-task3.7',
      source: 'task3.6',
      target: 'task3.7',
      type: 'custom',
      style: { 
        stroke: '#00A3FF',
        strokeWidth: 2,
        transition: 'all 0.5s ease-in-out'
      }
    },
    {
      id: 'task3.7-task3.8',
      source: 'task3.7',
      target: 'task3.8',
      type: 'custom',
      style: { 
        stroke: '#00A3FF',
        strokeWidth: 2,
        transition: 'all 0.5s ease-in-out'
      }
    },

    // Domain 4 connections
    {
      id: 'domain4-task4.1',
      source: 'domain4',
      target: 'task4.1',
      type: 'custom',
      data: { animated: false },
      style: { stroke: '#b1b1b7', strokeWidth: 1 }
    },
    {
      id: 'task4.1-task4.2',
      source: 'task4.1',
      target: 'task4.2',
      type: 'custom',
      data: { animated: false },
      style: { stroke: '#b1b1b7', strokeWidth: 1 }
    },
    {
      id: 'task4.2-task4.3',
      source: 'task4.2',
      target: 'task4.3',
      type: 'custom',
      data: { animated: false },
      style: { stroke: '#b1b1b7', strokeWidth: 1 }
    },
  ],
};

export default roadmapData; 