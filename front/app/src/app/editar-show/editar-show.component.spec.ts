import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarShowComponent } from './editar-show.component';

describe('EditarShowComponent', () => {
  let component: EditarShowComponent;
  let fixture: ComponentFixture<EditarShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
