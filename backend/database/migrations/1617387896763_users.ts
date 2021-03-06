import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Users extends BaseSchema {
  protected tableName = "users";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("username", 191).notNullable().unique();
      table.string("password").notNullable();
      table.enum("role", ["admin", "common"]).defaultTo("common");
      table.string("avatar").nullable();
      table.timestamps();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
