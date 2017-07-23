// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { MyResourcePanelComponent } from './my-resource-panel.component';
import { MyResourceNewItemComponent } from '../my-resource-new-item/my-resource-new-item.component';
import { MyResourceItemComponent } from '../my-resource-item/my-resource-item.component';

@NgModule({
    imports: [
    MyResourceNewItemComponent,
    MyResourceItemComponent

    ],
    declarations: [
        MyResourcePanelComponent,
    ],
    exports: [
        MyResourcePanelComponent,
        MyResourceItemComponent,
        MyResourcePanelComponent,
        MyResourceNewItemComponent

    ]
})
export class MyResourcePanelModule {

}
