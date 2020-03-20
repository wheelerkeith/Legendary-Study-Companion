import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModcontentComponent } from './modcontent.component';

describe('ModcontentComponent', () => {
  let component: ModcontentComponent;
  let fixture: ComponentFixture<ModcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
