
exports.seed = async function(knex) {
 await knex("cars").insert([
   {VIN: 000000, make: "Mitsubishi", model: "Lancer Evolution IV", mileage: 105000},
   {VIN: 011111, make: "Nissan", model: "Skyline R32", mileage: 142000},
   {VIN: 012222, make: "Acura", model: "NSX", mileage: 24000}
 ])
};
