import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { AuthService } from './auth/auth.service'; // Import AuthService
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) { // Inject AuthService and Router
    this.authService.logOut();
    this.router.navigateByUrl('/auth');
  }}
