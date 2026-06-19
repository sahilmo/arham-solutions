import { Component } from '@angular/core';
import { ContactComponent } from '../../components/contact/contact';
import { FeaturedProductComponent } from '../../components/featured-product/featured-product';
import { HeroComponent } from '../../components/hero/hero';
import { ServicesComponent } from '../../components/services/services';
import { TechStackComponent } from '../../components/tech-stack/tech-stack';

@Component({
  selector: 'app-home-page',
  imports: [ContactComponent, FeaturedProductComponent, HeroComponent, ServicesComponent, TechStackComponent],
  template: `
    <app-hero />
    <app-services />
    <app-tech-stack />
    <app-featured-product />
    <app-contact />
  `,
})
export class HomePageComponent {}
