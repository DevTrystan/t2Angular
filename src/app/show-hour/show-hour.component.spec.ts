import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHourComponent } from './show-hour.component';

describe('ShowHourComponent', () => {
  let component: ShowHourComponent;
  let fixture: ComponentFixture<ShowHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowHourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
