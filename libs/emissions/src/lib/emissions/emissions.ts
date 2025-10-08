import { Dropdown, TimeSeriesComponent } from '@nx-navtor/ui';
import { Component, computed, inject, signal, Signal } from '@angular/core';
import { EmissionsService } from '../services/emissions.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { IEmissions } from '../models/emissions.model';
import { VesselsService } from '@nx-navtor/vessels';
import type { SeriesLineOptions, SeriesOptionsType } from 'highcharts';

@Component({
  selector: 'lib-emissions',
  imports: [Dropdown, TimeSeriesComponent],
  templateUrl: './emissions.html',
  styleUrl: './emissions.css',
  standalone: true,
})
export class Emissions {
  private readonly emissionsService = inject(EmissionsService);
  private readonly vesselsService = inject(VesselsService);

  readonly vessels = toSignal(this.vesselsService.getVessels(), {
    initialValue: [],
  });
  readonly selectedVesselId = signal<number | null>(null);

  readonly vesselOptions = computed<{ id: number; name: string }[]>(() =>
    this.vessels().map((v) => ({ id: v.id, name: v.name }))
  );

  readonly selectedVesselName = computed<string>(
    () =>
      this.vessels().find((v) => v.id === this.selectedVesselId())?.name || ''
  );

  readonly emissions = toSignal(this.emissionsService.getEmissions(), {
    initialValue: [] as IEmissions[],
  });

  readonly selectedEmission = computed<IEmissions | null>(
    () => this.emissions().find((e) => e.id === this.selectedVesselId()) ?? null
  );

  private extractChartData = (
    prop: keyof IEmissions['timeSeries'][number]
  ): [number, number][] =>
    this.selectedEmission()?.timeSeries.map((ts) => [
      new Date(ts.report_from_utc).getTime(),
      ts[prop] as number,
    ]) ?? [];

  readonly combinedChartData = computed<SeriesOptionsType[]>(() => [
    {
      type: 'line',
      name: 'CO₂ Emissions (tonnes)',
      data: this.extractChartData('co2_emissions'),
      color: '#ef4444',
    } as SeriesLineOptions,
    {
      type: 'line',
      name: 'NOₓ Emissions (kg)',
      data: this.extractChartData('nox_emissions'),
      color: '#3b82f6',
    } as SeriesLineOptions,
    {
      type: 'line',
      name: 'SOₓ Emissions (kg)',
      data: this.extractChartData('sox_emissions'),
      color: '#8b5cf6',
    } as SeriesLineOptions,
    {
      type: 'line',
      name: 'PM Emissions (kg)',
      data: this.extractChartData('pm_emissions'),
      color: '#f59e0b',
    } as SeriesLineOptions,
  ]);
}
