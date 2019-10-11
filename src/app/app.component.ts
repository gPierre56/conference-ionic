import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Accueil',
      url: '/accueil',
      icon: 'home'
    },
    {
      title: 'Sessions',
      url: '/session',
      icon: 'bonfire'
    },
    {
      title: 'Présentateurs',
      url: 'presentateur',
      icon: 'contacts'
    },
    {
      title: 'Téléphone',
      url: 'telephone',
      icon: 'call'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
