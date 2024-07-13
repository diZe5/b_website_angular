import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestoPageComponent } from './manifesto-page.component';

describe('ManifestoPageComponent', () => {
  let component: ManifestoPageComponent;
  let fixture: ComponentFixture<ManifestoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManifestoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManifestoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
