import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MystudysetsComponent } from './mystudysets.component';

describe('MystudysetsComponent', () => {
  let component: MystudysetsComponent;
  let fixture: ComponentFixture<MystudysetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MystudysetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MystudysetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
