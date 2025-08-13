import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './tickets.component';
import { TicketsListComponent } from './pages/tickets-list/tickets-list.component';
import { TicketDetailComponent } from './pages/ticket-detail/ticket-detail.component';

const routes: Routes = [{ path: '', component: TicketsComponent },
  { path: '', component: TicketsListComponent },
  { path: ':id', component: TicketDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
