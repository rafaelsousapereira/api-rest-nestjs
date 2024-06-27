import { UUID } from "crypto";
import { Account } from "src/accounts/entities/account.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment {

  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column({ name: 'account_id', type: 'uuid' })
  @ManyToOne(() => Account, account => account.id)
  accountId: UUID;

  @Column({ type: 'bigint' })
  value: number;

  @Column({ name: 'date_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  dateAt: Date;

  @Column({ type: 'varchar', length: 255 })
  description: string;
}
