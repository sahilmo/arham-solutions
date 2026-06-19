import { Component } from '@angular/core';
import { ContactComponent } from '../../components/contact/contact';

@Component({
  selector: 'app-contact-page',
  imports: [ContactComponent],
  template: `
    <section class="section-shell pt-32 pb-0">
      <p class="eyebrow">Contact</p>
      <h1 class="section-title">Let us map the cleanest path from idea to launch.</h1>
      <p class="section-copy">
        Whether you are modernizing an existing platform or starting a new product, bring the challenge. We will help
        shape the next practical step.
      </p>
    </section>

    <app-contact />
  `,
})
export class ContactPage {}
