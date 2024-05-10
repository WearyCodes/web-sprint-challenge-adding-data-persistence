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

exports.seed = async function (knex) {
  await knex("resources").del();
  await knex("resources").insert(resources);
};
