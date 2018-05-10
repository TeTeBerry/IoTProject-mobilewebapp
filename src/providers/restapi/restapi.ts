import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestapiProvider {
  constructor(private http: HttpClient) {
    
  }
  register(body: any){
    return this.http.post('http://127.0.0.1:3000/members/memberadd', body, {
        observe: 'body',
        headers: new HttpHeaders().append('Content-Type', 'application/json')
      });
    }
  }