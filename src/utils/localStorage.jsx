const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    firstName: "Aryan",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Complete the monthly report.",
        date: "2025-01-10",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Attend the team meeting.",
        date: "2025-01-11",
        category: "Meeting",
        active: false,
        newTask: true,
        completed: true,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Submit the budget plan.",
        date: "2025-01-12",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    firstName: "Meera",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Prepare the client presentation.",
        date: "2025-01-10",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Review marketing strategies.",
        date: "2025-01-11",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    firstName: "Kunal",
    taskCount: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Fix reported bugs.",
        date: "2025-01-09",
        category: "Development",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Test new features.",
        date: "2025-01-10",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Task 3",
        description: "Update documentation.",
        date: "2025-01-11",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    firstName: "Aditi",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Organize team building activity.",
        date: "2025-01-09",
        category: "HR",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Task 2",
        description: "Finalize hiring process.",
        date: "2025-01-10",
        category: "Recruitment",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    firstName: "Ishaan",
    taskCount: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Task 1",
        description: "Conduct performance reviews.",
        date: "2025-01-08",
        category: "HR",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Task 2",
        description: "Plan annual budget.",
        date: "2025-01-09",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Task 3",
        description: "Coordinate with IT for infrastructure update.",
        date: "2025-01-10",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  //console.log("Setting localStorage data...");
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};

export default localStorage;
