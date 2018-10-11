import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A4ZoneComponent } from './a4-zone.component';

describe('A4ZoneComponent', () => {
  let component: A4ZoneComponent;
  let fixture: ComponentFixture<A4ZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A4ZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A4ZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
