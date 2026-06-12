import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Autenticar } from './autenticar';

describe('Autenticar', () => {
  let component: Autenticar;
  let fixture: ComponentFixture<Autenticar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Autenticar],
    }).compileComponents();

    fixture = TestBed.createComponent(Autenticar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
