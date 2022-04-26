export class Teacher {
  constructor(
    public id_teacher?: Number,
    public cin?: Number,
    public matricule?: String,
    public firstname?: String,
    public lastname?: String,
    public num_tel?: String,
    public email?: String,
    public rib?: String,
    public grade?: String,
    public departement?: String,
    public accountState?:Boolean
  ) {}
}
