export interface ITicket {
  id: string;
  title: string;
  description: string;
  subtasks: string[];
}

export interface IBoardList {
  name: string;
  tickets: ITicket[];
}

export interface IProject {
  id: string;
  name: string;
  board: IBoardList[];
}

export const projectsData: IProject[] = [
  {
    name: "Project 1",
    id: Math.random().toString(),
    board: [
      {
        name: "Todo",
        tickets: [
          {
            id: Math.random().toString(),
            title: "Task 1",
            description: "Description 1",
            subtasks: [],
          },
          {
            id: Math.random().toString(),
            title: "Task 2",
            description: "Description 2",
            subtasks: [],
          },
          {
            id: Math.random().toString(),
            title: "Task 3",
            description: "Description 3",
            subtasks: [],
          },
        ],
      },
      {
        name: "Doing",
        tickets: [
          {
            id: Math.random().toString(),
            title: "Task 4",
            description: "Description 4",
            subtasks: [],
          },
        ],
      },
      {
        name: "Done",
        tickets: [
          {
            id: Math.random().toString(),
            title: "Task 100",
            description: "Description 100",
            subtasks: [],
          },
          {
            id: Math.random().toString(),
            title: "Task 101",
            description: "Description 101",
            subtasks: [],
          },
          {
            id: Math.random().toString(),
            title: "Task 102",
            description: "Description 102",
            subtasks: [],
          },
          {
            id: Math.random().toString(),
            title: "Task 103",
            description: "Description 103",
            subtasks: [],
          },
          {
            id: Math.random().toString(),
            title: "Task 104",
            description: "Description 104",
            subtasks: [],
          },
          {
            id: Math.random().toString(),
            title: "Task 105",
            description: "Description 105",
            subtasks: [],
          },
        ],
      },
    ],
  },
  {
    name: "Project 2",
    id: Math.random().toString(),
    board: [
      {
        name: "Todo",
        tickets: [
          {
            id: Math.random().toString(),
            title: "Task 1",
            description: "Description 1",
            subtasks: [],
          },
          {
            id: Math.random().toString(),
            title: "Task 2",
            description: "Description 2",
            subtasks: [],
          },
          {
            id: Math.random().toString(),
            title: "Task 3",
            description: "Description 3",
            subtasks: [],
          },
        ],
      },
      { name: "Doing", tickets: [] },
      { name: "Done", tickets: [] },
    ],
  },
  {
    name: "Project 3",
    id: Math.random().toString(),
    board: [
      {
        name: "Todo",
        tickets: [
          {
            id: Math.random().toString(),
            title: "Task 1",
            description: "Description 1",
            subtasks: [],
          },
          {
            id: Math.random().toString(),
            title: "Task 2",
            description: "Description 2",
            subtasks: [],
          },
          {
            id: Math.random().toString(),
            title: "Task 3",
            description: "Description 3",
            subtasks: [],
          },
        ],
      },
      { name: "Doing", tickets: [] },
      { name: "Done", tickets: [] },
    ],
  },
];
