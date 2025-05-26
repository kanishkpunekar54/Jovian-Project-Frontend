import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProjectComponent } from './sidebar-project.component';

describe('SidebarProjectComponent', () => {
  let component: SidebarProjectComponent;
  let fixture: ComponentFixture<SidebarProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
