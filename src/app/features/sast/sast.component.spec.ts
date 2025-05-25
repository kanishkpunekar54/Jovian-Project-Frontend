import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SASTComponent } from './sast.component';

describe('SASTComponent', () => {
  let component: SASTComponent;
  let fixture: ComponentFixture<SASTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SASTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SASTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
