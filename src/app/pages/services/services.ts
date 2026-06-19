import { Component } from '@angular/core';
import { ServicesComponent } from '../../components/services/services';
import { services } from '../../core/company-profile';

@Component({
  selector: 'app-services-page',
  imports: [ServicesComponent],
  template: `
    <section class="section-shell pt-32">
      <p class="eyebrow">Services</p>
      <h1 class="section-title">Expert delivery across product strategy, interface systems and cloud engineering.</h1>
      <p class="section-copy">
        We help founders and teams define the right product surface, build it with durable technology and keep releases
        moving with measurable quality.
      </p>
    </section>

    <app-services />

    <section class="section-shell pt-0">
      <div class="grid gap-4 lg:grid-cols-4">
        @for (service of serviceCards; track service.title) {
          <div class="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <h2 class="text-lg font-semibold text-text">{{ service.title }}</h2>
            <p class="mt-3 text-sm leading-7 text-ink-muted">{{ service.description }}</p>
          </div>
        }
      </div>
    </section>
  `,
})
export class ServicesPage {
  protected readonly serviceCards = services;
}
