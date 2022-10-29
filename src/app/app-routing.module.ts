import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'calculator',
        loadChildren: () =>
          import('@calculatorModule/calculator.module').then(
            (module) => module.CalculatorModule
          ),
      },
      {
        path: '**',
        redirectTo: 'calculator'
      }
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
