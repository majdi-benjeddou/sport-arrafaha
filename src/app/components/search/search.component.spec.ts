import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NommeComponent } from './search.component';

describe('NommeComponent', () => {
  let component: NommeComponent;
  let fixture: ComponentFixture<NommeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NommeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
