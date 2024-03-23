import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule} from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';
import { MenuToolbarComponent } from '../components/menu-toolbar/menu-toolbar.component';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, MenuToolbarComponent, IonIcon]
})
export class PlacesPage implements OnInit {
  public places: string[] = ['Brunei', 'Tutong', 'Belait', 'Temburong']
  static places: any;
  
  constructor(private router: Router) { }
  
  navigateToDetail(place: string) {
    this.router.navigate(['/place-detail', place]);
  }

  ngOnInit() {
  }

}
