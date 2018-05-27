import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainhelpComponent } from './mainhelp.component';

describe('MainhelpComponent', () => {
  let component: MainhelpComponent;
  let fixture: ComponentFixture<MainhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
