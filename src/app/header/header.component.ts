import { Component } from '@angular/core';
import { BeerListingPageComponent } from '../beer-listing-page/beer-listing-page.component';
import { CommonModule } from '@angular/common';
import { AboutUsPageComponent } from "../about-us-page/about-us-page.component";
import { HomePageComponent } from "../home-page/home-page.component";
import { ManifestoPageComponent } from "../manifesto-page/manifesto-page.component";
import { CampaignsPageComponent } from "../campaigns-page/campaigns-page.component";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [BeerListingPageComponent, CommonModule, AboutUsPageComponent, HomePageComponent, CampaignsPageComponent, ManifestoPageComponent]
})


export class HeaderComponent {

  active_tab: string = 'home';
  tab_names_enum: string[] = ['home', 'beers', 'manifesto', 'campaigns', 'about_us'];
  tab_names: string[] = ['Our Story', 'Our Products', 'Manifesto' , 'Campaigns', 'Contact'];

  tabClicked(tab_name: any) {
    console.log(tab_name);
    this.active_tab = tab_name;
  }
}
