import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(public http:Http) {
      console.log('Data Service connected!')
  }
  getData(){
      return this.http.get('http://localhost:3016/api/home')
      .map(res => res.json())
  }

  getChildren(bank_name){
      return this.http.get('http://localhost:3016/api/home/' + bank_name)
      .map(res => res.json())
  }

  getLimits(id){
      return this.http.get('http://localhost:3016/api/limits/' + id)
      .map(res => res.json())
  }
}
