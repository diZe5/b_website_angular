import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerListingPageComponent } from './beer-listing-page.component';

describe('BeerListingPageComponent', () => {
  let component: BeerListingPageComponent;
  let fixture: ComponentFixture<BeerListingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeerListingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
