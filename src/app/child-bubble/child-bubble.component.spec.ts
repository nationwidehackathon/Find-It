import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBubbleComponent } from './child-bubble.component';

describe('ChildBubbleComponent', () => {
  let component: ChildBubbleComponent;
  let fixture: ComponentFixture<ChildBubbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildBubbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
