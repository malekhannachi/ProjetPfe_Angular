import { Teacher } from "./teacher";

export class DocumentEns {

    constructor(
        public id?: Number,
        public type?: String,
        public course_image?: String,
        public teacher?:Teacher
  
    ){}
}
