import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PilotRoomComponent} from './components/pilot-room/pilot-room.component';
import {HangarComponent} from './components/hangar/hangar.component';
import {DashboardComponent} from './core/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'pilot-room', component: PilotRoomComponent},
  {path: 'hangar', component: HangarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
