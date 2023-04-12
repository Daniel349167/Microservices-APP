import { IsDecimal, IsNotEmpty} from 'class-validator';

export class CreateTransactionDto {
  constructor() {
    console.log('CreateTransactionDto constructor called');
  }
  @IsNotEmpty()
  accountExternalIdDebit?: string | null;

  @IsNotEmpty()
  accountExternalIdCredit?: string | null;

  @IsNotEmpty()
  transferTypeId: number;

  @IsNotEmpty()
  value: number;
}
