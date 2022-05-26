
import { Promotion } from './promotion';

export class Student {
  constructor(
    public id_student?: Number,
    public cin?: Number,
    public num_ins?: Number,
    public firstname?: String,
    public lastname?: String,
    public date?: Date,
    public lieu_naissance?: String,
    public classe?: String,
    public nature_bac?: String,
    public annee_bac?: String,
    public accountState?: Boolean,
    public promotion?: Promotion
  ) {}
}
