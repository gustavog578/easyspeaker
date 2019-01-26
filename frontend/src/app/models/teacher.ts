export class Teacher {
    constructor(
        public id: number = Math.floor(Math.random() * 100),
        public name: string = "",
        public lastname: string = "",
        public email: string = "",
        public genre: string
    ) {

    }
}