exports.seed = async function (knex) {
  await knex("cars").truncate();
};
