import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioConComponent } from './cambio-con.component';

describe('CambioConComponent', () => {
  let component: CambioConComponent;
  let fixture: ComponentFixture<CambioConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambioConComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
