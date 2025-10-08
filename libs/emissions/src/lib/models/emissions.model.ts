export interface IEmissions {
  id: number;
  timeSeries: IEmissionTimeSeries[];
}

export interface IEmissionTimeSeries {
  ch4_emissions: number;
  co2_emissions: number;
  nox_emissions: number;
  pm_emissions: number;
  report_from_utc: string;
  report_to_utc: string;
  sox_emissions: number;
}
