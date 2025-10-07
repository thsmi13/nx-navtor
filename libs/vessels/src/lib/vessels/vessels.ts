import { Component, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { VesselsService } from '../services/vessels';
import { toSignal } from '@angular/core/rxjs-interop';
import { Vessel } from '../models/vessel.model';
import { themeQuartz } from 'ag-grid-community';

@Component({
  selector: 'lib-vessels',
  imports: [AgGridAngular],
  templateUrl: './vessels.html',
  styleUrl: './vessels.css',
})
export class Vessels {
  private vesselsService = inject(VesselsService);

  public theme = themeQuartz
    .withParams(
      {
        backgroundColor: 'black',
        foregroundColor: '#361008CC',
        browserColorScheme: 'light',
      },
      'light-red'
    )
    .withParams(
      {
        backgroundColor: '#201008',
        foregroundColor: '#FFFFFFCC',
        browserColorScheme: 'dark',
      },
      'dark-red'
    );

  // Signal to store data declaratively
  readonly vessels = toSignal(this.vesselsService.getVessels(), {
    initialValue: [] as Vessel[],
  });

  // Column definitions
  readonly columnDefs: ColDef<Vessel>[] = [
    { field: 'name', headerName: 'Name', sortable: true, filter: true },
    { field: 'mmsi', headerName: 'MMSI', sortable: true },
    { field: 'imo', headerName: 'IMO', sortable: true },
    { field: 'companyName', headerName: 'Company', sortable: true },
    { field: 'vesselType', headerName: 'Type', sortable: true },
  ];
}
