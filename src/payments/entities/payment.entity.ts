import { UUID } from "crypto";
import { Account } from "src/accounts/entities/account.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Payment {

  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @ManyToOne(() => Account, account => account.payments)
  @JoinColumn({ name: 'account_id' })
  account: Account;

  @Column({ type: 'numeric' })
  value: number;

  @CreateDateColumn({ type: 'timestamptz', nullable: false  })
  date: Date;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', nullable: true })
  updatedAt: Date;
}
