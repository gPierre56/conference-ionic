import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentateurPage } from './presentateur.page';

describe('PresentateurPage', () => {
  let component: PresentateurPage;
  let fixture: ComponentFixture<PresentateurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentateurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentateurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
