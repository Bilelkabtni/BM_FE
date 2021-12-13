import { IUsers } from 'projects/home/src/public-api';

export class Users {
    email: string;
    password: string;
    id: number;
    first_name: string;
    last_name: string;
    gender_id: number;
    company: string;
    language: ILanguage;
    createdAt: string;
    updatedAt: string;
    constructor(data: IUsers | null) {
        this.email = data.email;
        this.password = data.password;
        this.id = data.id;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.last_name = data.last_name;
        this.gender_id = data.gender_id;
        this.company = data.company;
        this.language = data.language;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}

interface ILanguage {
    main: string;
    secondary: string | null;
}
