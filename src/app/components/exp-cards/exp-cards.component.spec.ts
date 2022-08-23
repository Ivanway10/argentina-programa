import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpCardsComponent } from './exp-cards.component';

describe('ExpCardsComponent', () => {
  let component: ExpCardsComponent;
  let fixture: ComponentFixture<ExpCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
