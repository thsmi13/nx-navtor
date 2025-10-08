import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'lib-time-series',
  standalone: true,
  imports: [CommonModule, HighchartsChartComponent],
  templateUrl: './time-series.component.html',
  styleUrls: ['./time-series.component.css'],
})
export class TimeSeriesComponent {
  data = input<[number, number][]>([]);
  title = input<string>('Vessel Emissions Over Time');
  color = input<string>('#ef4444');
  series = input<Highcharts.SeriesOptionsType[]>([]);

  chartOptions = computed<Highcharts.Options>(() => ({
    chart: {
      type: 'line',
      height: 400,
      backgroundColor: '#1e293b',
      style: {
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#fff',
      },
    },
    title: {
      text: this.title(),
      style: { color: '#fff' },
    },
    xAxis: {
      type: 'datetime',
      title: { text: 'Date', style: { color: '#fff' } },
      labels: { style: { color: '#fff' } },
      lineColor: '#fff',
      tickColor: '#fff',
    },
    yAxis: {
      title: { text: this.title(), style: { color: '#fff' } },
      labels: { style: { color: '#fff' } },
      gridLineColor: '#334155',
      lineColor: '#fff',
      tickColor: '#fff',
    },
    legend: {
      itemStyle: { color: '#fff' },
      itemHoverStyle: { color: '#fbbf24' },
    },
    tooltip: {
      xDateFormat: '%Y-%m-%d',
      style: { color: '#fff', backgroundColor: '#1e293b' },
    },
    series: this.series(),
  }));
}
