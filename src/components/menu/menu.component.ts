import { Component } from '@angular/core';
import { menuTransition } from 'src/common/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
  animations: [menuTransition]
})
export class MenuComponent {

  constructor() { }
}
