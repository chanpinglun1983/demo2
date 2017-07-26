import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';

import { ProductManagementPage } from '../pages/product-management/product-management';

import { ResourceMappingPage } from '../pages/resource-mapping/resource-mapping';

import { MyProfileMenuComponent } from './my-profile-menu/my-profile-menu.component';
import { PopoverPage } from './my-profile-menu/pop-over-page.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyStepperComponent } from './my-stepper/my-stepper.component';
import { MyProductContainerComponent } from './my-product-container/my-product-container.component';
import { MyResourcePanelComponent } from './my-resource-panel/my-resource-panel.component';
import { MyResourceNewItemComponent } from './my-resource-new-item/my-resource-new-item.component';
import { MyResourceItemComponent } from './my-resource-item/my-resource-item.component';
import { MyProductNewItemComponent } from './my-product-new-item/my-product-new-item.component';
import { MyProductListComponent } from './my-product-list/my-product-list.component';

import { MyResourceMapNewItemComponent } from './my-resource-map-new-item/my-resource-map-new-item.component';
import { MyResourceMapItemComponent } from './my-resource-map-item/my-resource-map-item.component';
import { MyResourceMapListComponent } from './my-resource-map-list/my-resource-map-list.component';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    ProductManagementPage,
    ResourceMappingPage,
    MyProfileMenuComponent,
    PopoverPage,
    MyStepperComponent,
    MyProductContainerComponent,
    MyResourcePanelComponent,
    MyResourceNewItemComponent,
    MyResourceItemComponent,
    MyProductNewItemComponent,
    MyProductListComponent,
    MyResourceMapNewItemComponent,
    MyResourceMapItemComponent,
    MyResourceMapListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    
    ProductManagementPage,
    ResourceMappingPage,
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
