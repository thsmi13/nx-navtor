import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmissions } from '../models/emissions.model';

@Injectable({
  providedIn: 'root',
})
export class EmissionsService {
  private readonly http = inject(HttpClient);

  getEmissions(): Observable<IEmissions[]> {
    return this.http.get<IEmissions[]>(
      'https://frontendteamfiles.blob.core.windows.net/exercises/emissions.json'
    );
  }
}
