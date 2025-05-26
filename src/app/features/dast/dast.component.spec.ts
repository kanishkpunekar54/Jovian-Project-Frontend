import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DASTComponent } from './dast.component';

describe('DASTComponent', () => {
  let component: DASTComponent;
  let fixture: ComponentFixture<DASTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DASTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DASTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
