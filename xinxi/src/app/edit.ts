export class Edit {
    name = '';
    sex: string;
    age: number;
    tel = '';
    address: string;

    constructor(source?: Edit) {
        if (source) {
            this.name = source.name;
            this.sex = source.sex;
            this.age = source.age;
            this.tel = source.tel;
            this.address = source.address;
        }
    }
}
