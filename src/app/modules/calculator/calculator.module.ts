import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';
import { HeaderComponent } from './components/header/header.component';
import { NumpadComponent } from './components/numpad/numpad.component';
import { ResultComponent } from './components/result/result.component';
import { CalculatorService } from './calculator.service';
import { CalculatorStoreFacadeService } from './store/calculator-store-facade.service';
import { calculatorStateFeatureKey } from './store/calculator.state';
import { calculatorReducer } from './store/calculator.reducer';
import { CalculatorEffects } from './store/calculator.effects';
import { HttpErrorInterceptor } from './http-error.interceptor';

@NgModule({
  declarations: [
    CalculatorComponent,
    HeaderComponent,
    NumpadComponent,
    ResultComponent,
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    StoreModule.forFeature(calculatorStateFeatureKey, calculatorReducer),
    EffectsModule.forFeature([CalculatorEffects]),
  ],
  providers: [
    CalculatorService,
    CalculatorStoreFacadeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
})
export class CalculatorModule {}
