import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vessel } from '../models/vessel.model';

@Injectable({
  providedIn: 'root',
})
export class VesselsService {
  private readonly http = inject(HttpClient);
  private apiUrl =
    'https://frontendteamfiles.blob.core.windows.net/exercises/vessels.json';

  getVessels(): Observable<Vessel[]> {
    return this.http.get<Vessel[]>(this.apiUrl);
  }
}
