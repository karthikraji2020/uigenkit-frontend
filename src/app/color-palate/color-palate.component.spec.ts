import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPalateComponent } from './color-palate.component';

describe('ColorPalateComponent', () => {
  let component: ColorPalateComponent;
  let fixture: ComponentFixture<ColorPalateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPalateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPalateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
