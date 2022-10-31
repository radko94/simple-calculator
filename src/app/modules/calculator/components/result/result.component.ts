import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CalculatorStoreFacadeService } from '../../store/calculator-store-facade.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  public constructor(
    private readonly _calculatorStoreFacade: CalculatorStoreFacadeService
  ) {}

  public get getNextValue$(): Observable<string> {
    return this._calculatorStoreFacade.selectors.nextValue$;
  }

  public get getEvaluationSequence$(): Observable<string> {
    return this._calculatorStoreFacade.selectors.evaluationSequence$;
  }
}
