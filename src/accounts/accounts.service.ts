import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import { Repository, UpdateResult } from 'typeorm';
import { UUID } from 'crypto';

@Injectable()
export class AccountsService {

  constructor(
    @Inject('ACCOUNT_REPOSITORY') 
    private readonly accountRepository: Repository<Account>,
  ) {}

  create(createAccountDto: CreateAccountDto): Promise<Account> {
    const account: Account = new Account()

    account.id = createAccountDto.id
    account.name = createAccountDto.name
    account.accountType = createAccountDto.accountType    
    account.balance = createAccountDto.balance
    account.createdAt = createAccountDto.createdAt

    if (account.balance <= -1) {
      throw new BadRequestException('Invalid balance. Check balance and try again', { cause: new Error(), description: 'The opening balance cannot be negative' })
    }

    return this.accountRepository.save(account)
  }

  findAll(): Promise<Account[]> {
    return this.accountRepository.find()
  }

  findOne(id: UUID): Promise<Account> {
    return this.accountRepository.findOneBy({ id })
  }

  update(id: UUID, updateAccountDto: UpdateAccountDto): Promise<UpdateResult> {
    const account: Account = new Account()

    account.name = updateAccountDto.name
    account.accountType = updateAccountDto.accountType
    account.balance = updateAccountDto.balance
    account.createdAt = updateAccountDto.createdAt

    const accountId = account.id !== id || id === null

    if (accountId) {
      throw new NotFoundException(`Account with ID ${id} does not exist or is wrong`, {
        cause: new Error(), description: `Check account id and try again`,
      })
    }

    return this.accountRepository.update(id, account)
  }

  remove(id: UUID): Promise<{ affected?: number }> {
    return this.accountRepository.delete(id)
  }
}
