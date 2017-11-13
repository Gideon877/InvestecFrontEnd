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

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
    })

    this.dataService.getChildren().subscribe((children) => {

      this.children = children;
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
