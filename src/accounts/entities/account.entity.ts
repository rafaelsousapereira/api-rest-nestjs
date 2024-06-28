import { UUID } from "crypto";
import { Payment } from "src/payments/entities/payment.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

enum AccountTypeEnum  {
  Current = "CURRENT",
  Saving = "SAVINGS",
}

@Entity()
export class Account {

  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ name: 'account_type', type: 'enum', enum: [ 'CURRENT', 'SAVINGS' ] })
  accountType: AccountTypeEnum;

  @Column({ type: 'numeric' })
  balance: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz', nullable: false, })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', nullable: true })
  updatedAt: Date;

  @OneToMany(() => Payment, payment => payment.account)
  payments: Payment[];
}
