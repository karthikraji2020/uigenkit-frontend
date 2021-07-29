import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOptimizerComponent } from './image-optimizer.component';

describe('ImageOptimizerComponent', () => {
  let component: ImageOptimizerComponent;
  let fixture: ComponentFixture<ImageOptimizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageOptimizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageOptimizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
