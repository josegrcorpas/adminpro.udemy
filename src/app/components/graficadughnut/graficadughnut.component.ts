import { Component, Input, OnInit } from '@angular/core';

// graficas
import { ChartLegendItem, ChartLegendLabelOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-graficadughnut',
  templateUrl: './graficadughnut.component.html',
  styles: [
  ]
})
export class GraficadughnutComponent implements OnInit {
  @Input() doughnutChartData: MultiDataSet = [];
  @Input() doughnutChartLabels: Label = [];
  @Input() doughnutChartType: ChartType = 'doughnut';
@Input() doughnutChartOptions: any = {
  legend: {
    position: 'right',
    labels: {
      fontSize: 10,
      usePointStyle: true
    }
  }
};
  constructor() { }

  ngOnInit(): void {

  }
}
