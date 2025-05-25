import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCAComponent } from './sca.component';

describe('SCAComponent', () => {
  let component: SCAComponent;
  let fixture: ComponentFixture<SCAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SCAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
