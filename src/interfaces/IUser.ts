export interface IUser {
    _id: string;
    name: string;
    username: string;
    password: string;
    role: string;
}

export interface IUserDTO {
    name: string;
    username: string;
    password: string;
    role: string;
}
