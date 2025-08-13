// src/app/features/tickets/pages/tickets-list/tickets-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TicketsService } from './services/tickets.service';
import { Ticket } from 'src/app/shared/models/ticket.model';

@Component({
  selector: 'app-tickets-list',
  template: `
    <h2>Tickets</h2>
    <button (click)="refresh()">Refresh</button>
    <ul *ngIf="tickets?.length; else empty">
      <li *ngFor="let t of tickets" [routerLink]="[t.id]">
        {{ t.title }} • {{ t.status }} • {{ t.priority }}
      </li>
    </ul>
    <ng-template #empty><p>No tickets found.</p></ng-template>
  `
})
export class TicketsListComponent implements OnInit {
  tickets: Ticket[] = [];
  constructor(private api: TicketsService) {}
  ngOnInit() { this.refresh(); }
  refresh() { this.api.list().subscribe(res => this.tickets = res); }
}
