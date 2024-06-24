import { UUID } from "crypto";

enum AccountType  {
  Current = "CURRENT",
  Saving = "SAVING",
}

export class CreateAccountDto {
  id: UUID;
  name: string;
  accountType: AccountType;
  balance: number;
}
