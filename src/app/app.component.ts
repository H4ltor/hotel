import { Component } from '@angular/core';
import { IRoom } from 'src/IRoom';
import { RoomService } from 'src/Room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TEST';

  rooms: IRoom[];

  constructor(private roomService: RoomService) {
    this.rooms = this.roomService.rooms;
  }
}
