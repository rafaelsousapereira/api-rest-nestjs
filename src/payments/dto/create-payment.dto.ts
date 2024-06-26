import { IsDate, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { UUID } from "crypto";

export class CreatePaymentDto {

  @IsUUID()
  id: UUID;
  
  @IsUUID()
  @IsNotEmpty()
  accountId: UUID;

  @IsNotEmpty()
  value: number;

  @IsDate()
  @IsNotEmpty()
  dateAt: Date;

  @IsString()
  description?: string;
}
