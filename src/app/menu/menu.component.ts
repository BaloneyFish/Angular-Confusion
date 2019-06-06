import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;
  // or dishes = DISHES; as TypeScript identifies the type
  selectedDish: Dish = DISHES[0];
  constructor() { }

  ngOnInit() {
  }

}
