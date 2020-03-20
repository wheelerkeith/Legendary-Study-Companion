import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycontentComponent } from './mycontent.component';

describe('MycontentComponent', () => {
  let component: MycontentComponent;
  let fixture: ComponentFixture<MycontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
