import { Promotion } from './promotion';

export class Groupe {
  constructor(
    public id?: Number,
    public namegroupe?: String,
    public promotions?: Promotion
  ) {}
}
