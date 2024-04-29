import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaShowComponent } from './lista-show.component';

describe('ListaShowComponent', () => {
  let component: ListaShowComponent;
  let fixture: ComponentFixture<ListaShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
