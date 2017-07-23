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

import { MyProfileMenuComponent } from './my-profile-menu/my-profile-menu.component';
import { PopoverPage } from './my-profile-menu/pop-over-page.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyStepperComponent } from './my-stepper/my-stepper.component';
import { MyProductContainerComponent } from './my-product-container/my-product-container.component';
import { MyResourcePanelComponent } from './my-resource-panel/my-resource-panel.component';
import { MyResourceNewItemComponent } from './my-resource-new-item/my-resource-new-item.component';
import { MyResourceItemComponent } from './my-resource-item/my-resource-item.component';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    MyProfileMenuComponent,
    PopoverPage,
    MyStepperComponent,
    MyProductContainerComponent,
    MyResourcePanelComponent,
    MyResourceNewItemComponent,
    MyResourceItemComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
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
