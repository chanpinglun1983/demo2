import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { ProductManagementPage } from '../pages/product-management/product-management';
import { ResourceMappingPage } from '../pages/resource-mapping/resource-mapping';
import { LayoutManagementPage } from '../pages/layout-management/layout-management';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = ProductManagementPage;
  pages: Array<{title: string, component: any, icon:string}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      
      { title: 'Product Management', component: ProductManagementPage , icon: 'home' },
      { title: 'Resource Mapping', component: ResourceMappingPage , icon: 'home' },
      { title: 'Layout Management', component: LayoutManagementPage , icon: 'home'},
      { title: 'Hello Ionic', component: HelloIonicPage, icon: 'home'},
      { title: 'My First List', component: ListPage , icon: 'home'},
      { title: 'Users', component: UsersPage, icon: 'home' },
      { title: 'Repos', component: ReposPage , icon: 'heart'},
      { title: 'Organisations', component: OrganisationsPage, icon: 'home' }
      
    ];

    this.menu.enable(true, 'menu1');
    this.menu.enable(true, 'menu2');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  OnMouseEnter(event){
    event.target.classList.add("MenuItemHover");
  }


    OnMouseLeave(event){
    event.target.classList.remove("MenuItemHover");
  }
}
