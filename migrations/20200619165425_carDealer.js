exports.up = async function (knex) {
  await knex.schema.createTable("cars", (table) => {
    table.increments("id");
    table.real("VIN").notNull().unique();
    table.text("make").notNull();
    table.text("model").notNull();
    table.real("mileage").notNull();
    table.text("transmissionType");
    table.text("titleStatus");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("cars");
};
