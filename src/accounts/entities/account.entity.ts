import { UUID } from "crypto";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Account {

  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ name: 'account_type', type: 'enum', enum: ['CURRENT', 'SAVINGS']})
  accountType: AccountTypeEnum;

  @Column({ type: 'bigint' })
  balance: number;

  @Column({ name: 'created_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
