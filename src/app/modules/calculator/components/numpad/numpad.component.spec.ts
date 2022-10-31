import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { numpad, operations } from '@appModule/variables/global.variables';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

import { CalculatorStoreFacadeService } from '../../store/calculator-store-facade.service';

import { NumpadComponent } from './numpad.component';

describe('NumpadComponent', () => {
  let component: NumpadComponent;
  let fixture: ComponentFixture<NumpadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NumpadComponent],
      providers: [{
        provide: CalculatorStoreFacadeService,
        useValue: {
          actions: {
            nextValueChange: () => console.warn('here'),
            clearExpression: () => console.warn('here'),
            calculateExpression: () => console.warn('here'),
            selectOperator: () => console.warn('here'),
          }
        }
      }],
      // providers: [CalculatorStoreFacadeService],
      imports: [
        StoreModule.forRoot({}, {}),
        // MatTabsModule,
        // MatToolbarModule,
        // MatIconModule,
        // MatButtonModule,
        // MatCardModule,
        // RouterTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NumpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have defined properties', () => {
    expect(component.numpad).toBeDefined();
    expect(component.operations).toBeDefined();

    expect(component.numpad).toEqual(numpad.reverse());
    expect(component.operations).toEqual(operations);
  });

  it('onNumberInput should call nextValueChange', () => {
    const calculatorStoreFacadeService = TestBed.inject(
      CalculatorStoreFacadeService
    );

    const nextValueChangeSpy = spyOn(
      calculatorStoreFacadeService.actions,
      'nextValueChange'
    ).and.returnValue();

    component.onNumberInput('1');

    expect(nextValueChangeSpy).toHaveBeenCalled();
    expect(nextValueChangeSpy).toHaveBeenCalledTimes(1);
    expect(nextValueChangeSpy).toHaveBeenCalledWith('1');
  });


  it('onClear should call clearExpression', () => {
    const calculatorStoreFacadeService = TestBed.inject(
      CalculatorStoreFacadeService
    );

    const clearExpressionSpy = spyOn(
      calculatorStoreFacadeService.actions,
      'clearExpression'
    );

    component.onClear();

    expect(clearExpressionSpy).toHaveBeenCalled();
    expect(clearExpressionSpy).toHaveBeenCalledTimes(1);
  });

  it('onCalculate should call calculateExpressionSpy', () => {
    const calculatorStoreFacadeService = TestBed.inject(
      CalculatorStoreFacadeService
    );

    const calculateExpressionSpy = spyOn(
      calculatorStoreFacadeService.actions,
      'calculateExpression'
    );

    component.onCalculate();

    expect(calculateExpressionSpy).toHaveBeenCalled();
    expect(calculateExpressionSpy).toHaveBeenCalledTimes(1);
  });

  it('onCalculate should call calculateExpressionSpy', () => {
    const calculatorStoreFacadeService = TestBed.inject(
      CalculatorStoreFacadeService
    );

    const selectOperatorSpy = spyOn(
      calculatorStoreFacadeService.actions,
      'selectOperator'
    );

    component.onOperationSelect('-');

    expect(selectOperatorSpy).toHaveBeenCalled();
    expect(selectOperatorSpy).toHaveBeenCalledTimes(1);
    expect(selectOperatorSpy).toHaveBeenCalledWith('-');
  });
});
