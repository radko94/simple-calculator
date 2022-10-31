import { Component, OnInit } from '@angular/core';
import { numpad, operations } from '@appModule/variables/global.variables';
import { CalculatorStoreFacadeService } from '../../store/calculator-store-facade.service';

@Component({
  selector: 'app-numpad',
  templateUrl: './numpad.component.html',
  styleUrls: ['./numpad.component.scss'],
})
export class NumpadComponent implements OnInit {
  public numpad: any[];
  public operations: any[];

  public constructor(
    private readonly _calculatorStoreFacade: CalculatorStoreFacadeService
  ) {}

  public ngOnInit(): void {
    this.numpad = numpad.reverse();
    this.operations = operations;
  }

  public onNumberInput(number: string): void {
    this._calculatorStoreFacade.actions.nextValueChange(number);
  }

  public onOperationSelect(operation: string): void {
    this._calculatorStoreFacade.actions.selectOperator(operation);
  }

  public onCalculate(): void {
    this._calculatorStoreFacade.actions.calculateExpression();
  }

  public onClear(): void {
    this._calculatorStoreFacade.actions.clearExpression();
    this._calculatorStoreFacade.actions.clearNextValue();
  }
}
