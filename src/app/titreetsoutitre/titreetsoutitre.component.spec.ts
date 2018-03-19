import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreetsoutitreComponent } from './titreetsoutitre.component';

describe('TitreetsoutitreComponent', () => {
  let component: TitreetsoutitreComponent;
  let fixture: ComponentFixture<TitreetsoutitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitreetsoutitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitreetsoutitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
