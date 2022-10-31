import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { CalculatorStoreFacadeService } from '../../store/calculator-store-facade.service';

import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultComponent],
      imports: [StoreModule.forRoot({}, {}), MatCardModule],
      providers: [
        {
          provide: CalculatorStoreFacadeService,
          useValue: {
            selectors: {
              evaluationSequence$: of('test_evaluation_sequence'),
              nextValue$: of('test_next_value'),
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getNextValue$ should return Observable<string>', () => {
    const calculatorStoreFacadeService = TestBed.inject(
      CalculatorStoreFacadeService
    );

    component.getNextValue$.subscribe((result) =>
      expect(result).toEqual('test_next_value')
    );
  });

  it('getEvaluationSequence$ should return Observable<string>', () => {
    const calculatorStoreFacadeService = TestBed.inject(
      CalculatorStoreFacadeService
    );

    component.getEvaluationSequence$.subscribe((result) =>
      expect(result).toEqual('test_evaluation_sequence')
    );
  });
});
