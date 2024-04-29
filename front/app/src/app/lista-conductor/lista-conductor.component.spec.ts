import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConductorComponent } from './lista-conductor.component';

describe('ListaConductorComponent', () => {
  let component: ListaConductorComponent;
  let fixture: ComponentFixture<ListaConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaConductorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
