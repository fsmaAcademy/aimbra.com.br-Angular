import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AimbraUiComponent } from './aimbra-ui.component';

describe('AimbraUiComponent', () => {
  let component: AimbraUiComponent;
  let fixture: ComponentFixture<AimbraUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AimbraUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AimbraUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
