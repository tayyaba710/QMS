import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/shared/models/ticket.model';


@Injectable({ providedIn: 'root' })
export class TicketsService {
  private base = `${environment.apiBaseUrl}/tickets`;
  constructor(private http: HttpClient) {}

  list(): Observable<Ticket[]> { return this.http.get<Ticket[]>(this.base); }
  get(id: string): Observable<Ticket> { return this.http.get<Ticket>(`${this.base}/${id}`); }
  create(payload: Ticket): Observable<Ticket> { return this.http.post<Ticket>(this.base, payload); }
  update(id: string, payload: Ticket): Observable<Ticket> { return this.http.put<Ticket>(`${this.base}/${id}`, payload); }
  remove(id: string): Observable<void> { return this.http.delete<void>(`${this.base}/${id}`); }
}