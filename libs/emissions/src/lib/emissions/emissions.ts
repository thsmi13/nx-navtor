import { Dropdown } from '@nx-navtor/ui';
import { Component, computed, inject, signal } from '@angular/core';
import { EmissionsService } from '../services/emissions.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { IEmissions } from '../models/emissions.model';
import { VesselsService } from '@nx-navtor/vessels';

@Component({
  selector: 'lib-emissions',
  imports: [Dropdown],
  templateUrl: './emissions.html',
  styleUrl: './emissions.css',
})
export class Emissions {
  private emissionsService = inject(EmissionsService);
  private vesselsService = inject(VesselsService);

  readonly vessels = toSignal(this.vesselsService.getVessels(), {
    initialValue: [],
  });

  readonly selectedVesselId = signal<number | null>(null);

  readonly vesselOptions = computed(() =>
    this.vessels().map((v) => ({
      id: v.id,
      name: v.name,
    }))
  );

  readonly selectedVesselName = computed(() => {
    const id = this.selectedVesselId();
    return this.vessels().find((v) => v.id === id)?.name || '';
  });

  readonly emissions = toSignal(this.emissionsService.getEmissions(), {
    initialValue: [] as IEmissions[],
  });
}
