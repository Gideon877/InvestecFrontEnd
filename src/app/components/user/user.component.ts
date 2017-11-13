import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DataService } from '../../services/data.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  name: string;
  data:Data[];
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.name = 'Thabang Gideon'
    this.dataService.getData().subscribe((data) => {
      this.data = data;
    })
  }
}

interface Data {
    Children_Banks: number,
    Parent_Entity_Name: string
}
