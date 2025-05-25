import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatModlingComponent } from './threat-modling.component';

describe('ThreatModlingComponent', () => {
  let component: ThreatModlingComponent;
  let fixture: ComponentFixture<ThreatModlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreatModlingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreatModlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
