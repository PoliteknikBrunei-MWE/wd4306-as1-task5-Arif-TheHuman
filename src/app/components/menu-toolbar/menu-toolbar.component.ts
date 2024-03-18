import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class MenuToolbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
