import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookPanelComponent } from './facebook-panel.component';

describe('FacebookPanelComponent', () => {
  let component: FacebookPanelComponent;
  let fixture: ComponentFixture<FacebookPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
