import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuToolbarComponent } from '../components/menu-toolbar/menu-toolbar.component';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MenuToolbarComponent]
})
export class OffersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
