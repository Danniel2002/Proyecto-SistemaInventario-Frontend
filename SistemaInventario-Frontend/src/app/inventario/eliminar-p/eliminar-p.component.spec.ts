import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPComponent } from './eliminar-p.component';

describe('EliminarPComponent', () => {
  let component: EliminarPComponent;
  let fixture: ComponentFixture<EliminarPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
