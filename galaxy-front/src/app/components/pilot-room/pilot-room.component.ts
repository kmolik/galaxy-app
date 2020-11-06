import { Component, OnInit } from '@angular/core';
import {Pilots} from '../../shared/models/pilots';
import {PilotsService} from '../../shared/services/pilots.service';

@Component({
  selector: 'app-crew-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.scss']
})
export class PilotRoomComponent implements OnInit {

  pilots: Pilots[] = [];

  constructor(
    private pilotsService: PilotsService
  ) { }

  ngOnInit(): void {
    this.pilotsService.getPilots().subscribe((data) => {
      this.pilots = data;
    });
  }

}
