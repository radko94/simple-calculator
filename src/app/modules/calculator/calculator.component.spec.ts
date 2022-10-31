import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { CalculatorComponent } from './calculator.component';
import { HeaderComponent } from './components/header/header.component';
import { NumpadComponent } from './components/numpad/numpad.component';
import { ResultComponent } from './components/result/result.component';
import { CalculatorStoreFacadeService } from './store/calculator-store-facade.service';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CalculatorComponent,
        HeaderComponent,
        ResultComponent,
        NumpadComponent,
      ],
      providers: [CalculatorStoreFacadeService],
      imports: [StoreModule.forRoot({}, {})],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
