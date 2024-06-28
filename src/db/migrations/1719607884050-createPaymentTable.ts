import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class CreatePaymentTable1719607884050 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'payment',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: 'accountId',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'value',
                        type: 'numeric',
                        isNullable: false,
                    },
                    {
                        name: "date",
                        type: "timestamptz",
                        default: "now()",
                        isNullable: false,
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: "updated_at",
                        type: "timestamptz",
                        isNullable: true,
                    }
                ]
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("payment")
    }
}
