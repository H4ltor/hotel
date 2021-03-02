import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/Room.service';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.scss']
})
export class ReceptionComponent implements OnInit {


  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
  }

}
