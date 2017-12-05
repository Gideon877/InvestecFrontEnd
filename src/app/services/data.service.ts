import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment'

@Injectable()
export class DataService {

  constructor(public http:Http) {
      console.log('Data Service connected!')
  }
  getData(){
      return this.http.get(environment.url + '/api/home')
      .map(res => res.json())
  }

  getChildren(bank_name){
      return this.http.get(environment.url + '/api/home/' + bank_name)
      .map(res => res.json())
  }

  getLimits(id){
      return this.http.get(environment.url + '/api/limits/' + id)
      .map(res => res.json())
  }

  getShares(type){
      return this.http.get(environment.url + '/api/share')
      .map(res => res.json)
  }
}
