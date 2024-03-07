import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class PlacesPage implements OnInit {
  places: string[] = ['Brunei', 'Tutong', 'Belait', 'Temburong']
  constructor(private router: Router) { }
  
  navigateToDetail(place: string) {
    this.router.navigate(['/place-detail', place]);
  }

  ngOnInit() {
  }

}
