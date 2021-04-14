import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class DeletedConversations extends BaseSchema {
  protected tableName = "deleted_conversations";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.integer("conversation_id").unsigned();
      table.foreign("conversation_id").references("id").inTable("conversations");
      table.timestamps();
    });
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropForeign(["conversation_id"]);
    });

    this.schema.dropTable(this.tableName);
  }
}
