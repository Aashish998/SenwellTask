import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameCheckComponent } from './name-check.component';

describe('NameCheckComponent', () => {
  let component: NameCheckComponent;
  let fixture: ComponentFixture<NameCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameCheckComponent]
    });
    fixture = TestBed.createComponent(NameCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
