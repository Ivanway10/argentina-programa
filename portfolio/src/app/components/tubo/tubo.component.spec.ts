import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuboComponent } from './tubo.component';

describe('TuboComponent', () => {
  let component: TuboComponent;
  let fixture: ComponentFixture<TuboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
