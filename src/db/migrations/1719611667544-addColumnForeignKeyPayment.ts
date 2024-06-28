import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddColumnForeignKeyPayment1719611667544 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "account",
            new TableColumn({
                name: "payments",
                type: "uuid",
            }),
        )

        await queryRunner.createForeignKey(
            "account",
            new TableForeignKey({
                columnNames: ["payments"],
                referencedColumnNames: ["id"],
                referencedTableName: "payment",
                onDelete: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("payment")
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("accountId") !== -1,
        )

        await queryRunner.dropForeignKey("payments", foreignKey)
        await queryRunner.dropColumn("payments", "accountId")
    }

}
