import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'

import { DataService } from '../../services/data.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  data: Data[];
  children: Children[];
  limit: Limits [];

  constructor(private dataService: DataService) {
  }

  onSelect(bank){
      var bank_name: string = bank.Parent_Entity_Name;
      this.dataService.getChildren(bank_name).subscribe((children) => {
          this.children = children;
      })
  }

  childLimit(item){
      var id: number = item.Entity_Id
      this.dataService.getLimits(id).subscribe((limit) => {
          this.limit = limit;
           console.log('-----', limit);
      })
  }

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
    })

  }
}

interface Data {
  Children_Banks: number,
  Parent_Entity_Name: string
}

interface Children {
  id: number,
  Parent_Entity_Id: number,
  Parent_Entity_Name: string,
  Relationship_Type: string,
  Entity_Id: number,
  Entity_Name: string
}

interface Limits {
    Entity_Id: number,
    Risk_Taker_Group_Name: string,
    Risk_Taker_Name: string,
    Facility_Id: any,
    Facility_Type: any,
    Limit_Id: any,
    Limit_Type: any,
    Product: any,
    Risk_Type: any,
    Currency: any,
    Exposure_Amount: any,
    Total_Current_Limit: any,
    Total_Approved_Limit: any,
}
