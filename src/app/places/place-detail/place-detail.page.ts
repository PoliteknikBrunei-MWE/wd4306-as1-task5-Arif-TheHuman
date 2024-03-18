import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { cart } from 'ionicons/icons';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PlaceDetailPage implements OnInit {
  place: string | null | undefined;

  constructor(private route: ActivatedRoute) { 
    addIcons({ cart });
  } 
  
  ngOnInit() {
    this.place = this.route.snapshot.paramMap.get('place');
  }
  addIcons() {
    addIcons({ cart });
  }

}
