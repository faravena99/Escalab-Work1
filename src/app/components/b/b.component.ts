import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  constructor(private listSvc: ListService) { }

  ngOnInit(): void {
    console.log(this.listSvc.getList())
  }

}
