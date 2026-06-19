import { Component } from '@angular/core';
import { FeaturedProductComponent } from '../../components/featured-product/featured-product';

@Component({
  selector: 'app-products-page',
  imports: [FeaturedProductComponent],
  template: `
    <section class="section-shell pt-32">
      <p class="eyebrow">Products</p>
      <h1 class="section-title">Composable product foundations for faster launches.</h1>
      <p class="section-copy">
        Our product accelerators combine tested architecture, interface patterns and deployment workflows that can be
        tailored to your domain.
      </p>
    </section>

    <app-featured-product />

    <section class="section-shell pt-0">
      <div class="grid gap-5 md:grid-cols-3">
        @for (product of products; track product.name) {
          <article class="glass-panel rounded-lg p-6">
            <p class="text-sm font-semibold text-accent">{{ product.type }}</p>
            <h2 class="mt-4 text-xl font-semibold text-text">{{ product.name }}</h2>
            <p class="mt-3 text-sm leading-7 text-ink-muted">{{ product.description }}</p>
          </article>
        }
      </div>
    </section>
  `,
})
export class ProductsPage {
  protected readonly products = [
    {
      type: 'Accelerator',
      name: 'LaunchOS',
      description: 'A modular starter for portals, dashboards and internal tools.',
    },
    {
      type: 'Automation',
      name: 'FlowGrid',
      description: 'Workflow orchestration for repetitive business operations and status visibility.',
    },
    {
      type: 'Insights',
      name: 'SignalDesk',
      description: 'Analytics surfaces that turn operational data into decisions teams can trust.',
    },
  ] as const;
}
