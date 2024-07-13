import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BeerListingPageComponent } from './beer-listing-page/beer-listing-page.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'beer-list',
        component: BeerListingPageComponent
    }
];
