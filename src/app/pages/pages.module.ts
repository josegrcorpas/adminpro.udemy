import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';

// Graficas
import { ChartsModule } from 'ng2-charts';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Modulos personalizados
import { SharedModule } from '../shared/shared.module';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficadughnutComponent } from '../components/graficadughnut/graficadughnut.component';




@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        IncrementadorComponent,
        GraficadughnutComponent
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModule{ }
