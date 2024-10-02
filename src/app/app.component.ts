import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
onInput($event: Event) {
throw new Error('Method not implemented.');
}
  cartList: string[] = ["Laptop", "Computer"];
  item: string = '';

  addItems() {
    this.cartList.push(this.item);
  }
}
