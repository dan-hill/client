import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ItemService } from "../item.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  user = { };
  items = []
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getAll().subscribe((data: any) => {
      console.log(data);
      this.items = data;
    });
  }
}
