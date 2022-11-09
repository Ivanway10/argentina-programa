import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduCardsComponent } from './edu-cards.component';

describe('EduCardsComponent', () => {
  let component: EduCardsComponent;
  let fixture: ComponentFixture<EduCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
