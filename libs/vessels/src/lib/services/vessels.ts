import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vessel } from '../models/vessel.model';

@Injectable({
  providedIn: 'root',
})
export class VesselsService {
  private readonly http = inject(HttpClient);

  getVessels(): Observable<Vessel[]> {
    return this.http.get<Vessel[]>(
      'https://frontendteamfiles.blob.core.windows.net/exercises/vessels.json'
    );
  }
}
