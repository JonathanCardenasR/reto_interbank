import { Observable } from "rxjs";
import { IDomainResponseUser } from "../domain/user.model";


export interface IUserApiService {
    getUserByUsername(username:string): Observable<IDomainResponseUser>;
}