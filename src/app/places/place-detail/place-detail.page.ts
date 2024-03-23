import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { cart } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CreateBookingComponent]
})
export class PlaceDetailPage implements OnInit {
  place: string | null | undefined;

  constructor(private route: ActivatedRoute, private modalCtrl: ModalController) { } 
  
  ngOnInit() {
    this.place = this.route.snapshot.paramMap.get('place');
    if (this.place) {
      localStorage.setItem('place', JSON.stringify(this.place));
    }
  }

  ngOnDestroy() {
    localStorage.removeItem('place');
  }
  
  addIcons() {
    addIcons({ cart });
  }
  
  onBookPlace() {
    this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: { selectedPlace: this.place }
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(resultData => {
      console.log(resultData.data, resultData.role);
      if (resultData.role === 'confirm') {
        console.log('BOOKED!');
      }
    });
  }
}