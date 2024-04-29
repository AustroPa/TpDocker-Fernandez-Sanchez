import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarShowComponent } from './agregar-show.component';

describe('AgregarShowComponent', () => {
  let component: AgregarShowComponent;
  let fixture: ComponentFixture<AgregarShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
