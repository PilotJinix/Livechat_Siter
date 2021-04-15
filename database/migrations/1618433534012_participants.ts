import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Participants extends BaseSchema {
  protected tableName = "participants";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.integer("user_id").unsigned();
      table.foreign("user_id").references("id").inTable("users");
      table.integer("conversation_id").unsigned();
      table.foreign("conversation_id").references("id").inTable("conversations");
      table.timestamps();
    });
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropForeign(["user_id"]);
      table.dropForeign(["conversation_id"]);
    });

    this.schema.dropTable(this.tableName);
  }
}
