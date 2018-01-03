import { Component,ViewChild } from '@angular/core';
import { Platform,MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { ListPage } from '../pages/list/list';
import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = TabsPage;
  @ViewChild(Nav) nav: Nav;
  rootPage = HomePage && TabsPage;
  
  
  pages: Array<{title: string}>;
  
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
      this.inicializarApp();

      this.pages = [
        {title: 'Bienvenido al Proyecto'},
        {title: 'Perfil'},
        {title: 'Ayuda'},
        {title: 'Informacion'},
        {title: 'Cerrar Sesion'},      
      ]

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
   
  }
  inicializarApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(pages) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(pages.component);

  }
}
