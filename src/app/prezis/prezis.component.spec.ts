import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrezisComponent } from './prezis.component';

describe('PrezisComponent', () => {
  let component: PrezisComponent;
  let fixture: ComponentFixture<PrezisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrezisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrezisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
