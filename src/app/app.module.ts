import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { FormsModule } from '@angular/forms';
import { ReceptionComponent } from './reception/reception.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    ReceptionComponent,
    RestaurantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
