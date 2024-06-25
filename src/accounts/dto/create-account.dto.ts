import { IsDateString, IsDecimal, IsEnum, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";
import { UUID } from "crypto";

export class CreateAccountDto {

  id: UUID;

  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: 'The name must have at least 3 characters' })
  name: string;

  @IsNotEmpty()
  @IsEnum(['CURRENT', 'SAVINGS'])
  accountType: AccountTypeEnum;

  @IsNotEmpty()
  balance: number;

  createdAt: Date;
}
