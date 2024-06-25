export interface IDomainRequestUser{
    username: string;
    password: string;   
}

export interface IDomainResponseUser extends IDomainRequestUser{
    id: number;
    role: string;
}

export interface IDomainResponse{
    message: string;
    code: number;
}