import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCartItemsTable1702009082994 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "cart_items",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()"
                },
                {
                    name: "product_id",
                    type: "uuid"
                },
                {
                    name: "quantity",
                    type: "int"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }), true);

        // Añadir clave foránea para relacionar cart_items con products
        await queryRunner.createForeignKey("cart_items", new TableForeignKey({
            columnNames: ["product_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "products",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Deshacer lo que hiciste en el método up
        await queryRunner.dropTable("cart_items");
    }

}
