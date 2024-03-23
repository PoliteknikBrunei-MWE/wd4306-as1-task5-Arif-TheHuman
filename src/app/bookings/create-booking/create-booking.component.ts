import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PlacesPage } from 'src/app/places/places.page';
import { ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class CreateBookingComponent  implements OnInit {
  public place_description: string[] = [
  "Brunei-Muara is one of the four districts of Brunei. It has the smallest area among the four districts, with 571 square kilometres (220 sq mi), yet is the most populous, with 289,630 people as of 2016.Bandar Seri Begawan, the country's capital, is located in this district, which is also de facto the district's capital. It is also home to Brunei International Airport, the country's only international airport, as well as Muara Port, the main and only deep-water port in the country. The Brunei River flows within this district and is home to Kampong Ayer, the traditional historic settlement on stilts above the river.",
  "Tutong is one of the four districts of Brunei. The district borders the South China Sea to the north, the Bruneian district of Brunei-Muara and the Malaysian state of Sarawak to the east and the Bruneian district of Belait to the west. It has a population of 35,200, and covers 1,303 km² (503 mi²). The Sungai Tutong river flows through Tutong. The district is bound by the South China Sea to the north, the Bruneian district of Brunei-Muara and the Malaysian state of Sarawak to the east, and the Bruneian district of Belait to the west. The district is home to the country's largest lake, Tasek Merimbun, which makes up the western part of the district. The district is administered from the town of Pekan Tutong.",
  "Belait is the largest as well as the westernmost district in Brunei. The word 'Belait' is taken from the name of the native inhabitants of Belait, the Belait People. The district is administered from the town of Kuala Belait. The district is home to the country's only oil refinery, the Sungai Liang Industrial Park and the country's largest petroleum company, Brunei Shell Petroleum, which is a joint venture between the Government of Brunei and Royal Dutch Shell. The Belait River is the main river in the district. The district is bound by the South China Sea to the north, the Bruneian district of Tutong to the east, the Malaysian state of Sarawak to the west and the Bruneian district of Temburong to the south-east.",
  "Temburong is the easternmost district (daerah) in Brunei. It is an exclave, as it is separated from the rest of Brunei by Malaysia and Brunei Bay. Its capital is Bangar. The district borders the South China Sea to the north, Sarawak (Malaysia) to the east, west and south, and the Bruneian district of Brunei-Muara to the northwest. The Sungai Temburong river flows through the district. The district is the location of the Ulu Temburong National Park, which is accessible by boat and an hour-long longboat ride up the river from Bangar. The park is the first national park in Brunei and is known for its rainforest and biodiversity. The district is administered from the town of Bangar."
  ]

  public places: string[] = ['Brunei', 'Tutong', 'Belait', 'Temburong'];
  public locationIndex: number = 0;


  constructor(private route: ActivatedRoute, private modalCtrl: ModalController) { }

  ngOnInit() {
    const location = JSON.parse(localStorage.getItem('place') as string);
    if (location === "Brunei"){
      this.locationIndex = 0;
    } else if (location === "Tutong"){
      this.locationIndex = 1;
    } else if (location === "Belait"){
      this.locationIndex = 2;
    } else if (location === "Temburong"){
      this.locationIndex = 3;
    }
  }


  onBookPlace() {
    this.modalCtrl.dismiss({message: 'This is a dummy message!'}, 'confirm');
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}
