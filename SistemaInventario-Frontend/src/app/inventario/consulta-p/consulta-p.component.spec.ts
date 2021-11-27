import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPComponent } from './consulta-p.component';

describe('ConsultaPComponent', () => {
  let component: ConsultaPComponent;
  let fixture: ComponentFixture<ConsultaPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
