import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateAccountTable1719595226882 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'account',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'balance',
                        type: 'numeric',
                        isNullable: false,
                    },
                    {
                        name: 'account_type',
                        type: 'enum',
                        enum: ['CURRENT', 'SAVINGS']
                    },
                    {
                        name: "created_at",
                        type: "timestamptz",
                        default: "now()",
                        isNullable: false,
                    },
                    {
                        name: "updated_at",
                        type: "timestamptz",
                        isNullable: true,
                    },
                ]
            }),
            true,
        )

        await queryRunner.createIndex(
            "account",
            new TableIndex({
                name: "IDX_ACCOUNT_NAME",
                columnNames: ["name"],
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex("account", "IDX_ACCOUNT_NAME")
        await queryRunner.dropTable("account")
    }
}
