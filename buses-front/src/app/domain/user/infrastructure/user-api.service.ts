import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable,map } from 'rxjs';
import { IUserApiService } from './user-api.interface';
import { IDomainResponseUser } from '../domain/user.model';
import { IApiResponseUser } from './models/user-api.model';

@Injectable()
export class UserApiService implements IUserApiService{

  private _http = inject(HttpClient);
  private readonly URL_USER =  environment.backend + '/users';

  getUserByUsername(username:string): Observable<IDomainResponseUser>{

    return this._http.get<IApiResponseUser>(`${this.URL_USER}/${username}`).pipe(
      map((response)=> 
        ({
          id: response.id,
          username: response.username,
          password: response.password,
          role: response.role
        })
      )
    );
  }

}
