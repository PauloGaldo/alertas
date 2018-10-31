import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelHeaderComponent } from './control-panel-header.component';

describe('ControlPanelHeaderComponent', () => {
  let component: ControlPanelHeaderComponent;
  let fixture: ComponentFixture<ControlPanelHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPanelHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
