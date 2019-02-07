import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCreateComponent } from './cat-create.component';

describe('CatCreateComponent', () => {
  let component: CatCreateComponent;
  let fixture: ComponentFixture<CatCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
