
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Cart1702058142679 implements MigrationInterface {

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
                    type: "uuid",
                },
                {
                    name: "quantity",
                    type: "integer",
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
        }));

        await queryRunner.createForeignKey("cart_items", new TableForeignKey({
            columnNames: ["product_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "products",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("cart_items");
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("product_id") !== -1);
        if (foreignKey) {
            await queryRunner.dropForeignKey("cart_items", foreignKey);
        }

        await queryRunner.dropTable("cart_items");
    }
}
