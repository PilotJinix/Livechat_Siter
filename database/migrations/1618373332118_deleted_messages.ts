import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class DeletedMessages extends BaseSchema {
  protected tableName = "deleted_messages";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.integer("message_id").unsigned();
      table.foreign("message_id").references("id").inTable("messages");
      table.timestamps();
    });
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropForeign(["message_id"]);
    });

    this.schema.dropTable(this.tableName);
  }
}
