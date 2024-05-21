const projects = [
  {
    project_name: "AI project",
    project_description: "This is a project to create an AI",
    project_completed: false,
  },
  {
    project_name: "Typescript project",
    project_description: "This is a project to create a typescript function",
    project_completed: false,
  },
  {
    project_name: "React project",
    project_description: "This is a project to create a react component",
    project_completed: false,
  },
];

const resources = [
  {
    resource_name: "Typescript knowledge",
    resource_description:
      "To complete this project, you should know how typescript works",
  },
  {
    resource_name: "AI knowledge",
    resource_description: "You also need to know how to write AI algorithms",
  },
  {
    resource_name: "Good research skills",
    resource_description:
      "You should be able to find and understand solutions to problems",
  },
];

const tasks = [
  {
    task_description: "Design database schema",
    task_notes: "Create tables and relationships",
    task_project_id: 1,
    task_resource_id: 2,
    task_completed: false,
  },
  {
    task_description: "Implement user authentication",
    task_notes: "Use JWT for token-based authentication",
    task_project_id: 1,
    task_resource_id: 3,
    task_completed: false,
  },
  {
    task_description: "Set up CI/CD pipeline",
    task_notes: "Configure Jenkins and GitHub Actions",
    task_project_id: 2,
    task_resource_id: 1,
    task_completed: false,
  },
  // Add more tasks ensuring the task_project_id and task_resource_id are valid
];

exports.seed = async function (knex) {
  await knex("tasks").del();
  await knex("resources").del();
  await knex("projects").del();

  await knex("projects").insert(projects);
  await knex("resources").insert(resources);
  await knex("tasks").insert(tasks);
};
