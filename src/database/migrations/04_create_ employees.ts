import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('employees', table => {
            table.string('name').notNullable();
            table.string('matricula').notNullable();
            table.string('locationsIds').notNullable();
            
    });
}

export async function down(knex:Knex) {
    return knex.schema.dropTable('employees');
    
}