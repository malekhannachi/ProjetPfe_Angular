import { Promotion } from "./promotion";

export class DocumentEtd {

    constructor(
        public id?: Number,
        public type?: String,
        public course_image?: String,
        public promotions?:Promotion
  
    ){}
}
