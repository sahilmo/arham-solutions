import { Component } from '@angular/core';
import { companyStats } from '../../core/company-profile';

@Component({
  selector: 'app-about-page',
  template: `
    <section class="section-shell pt-32">
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p class="eyebrow">About</p>
          <h1 class="section-title">A software partner built for clarity, speed and long-term trust.</h1>
          <p class="section-copy">
            Arham Solutions blends product thinking with pragmatic engineering. We care about clean interfaces,
            maintainable code, accessible experiences and infrastructure that behaves when it matters.
          </p>
        </div>
        <div class="glass-panel rounded-lg p-6">
          <div class="grid gap-4 sm:grid-cols-3">
            @for (stat of stats; track stat.label) {
              <div class="rounded-md bg-white/[0.04] p-5">
                <p class="text-3xl font-semibold text-accent">{{ stat.value }}</p>
                <p class="mt-2 text-sm leading-6 text-ink-muted">{{ stat.label }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell pt-0">
      <div class="grid gap-5 md:grid-cols-3">
        @for (value of values; track value.title) {
          <article class="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <h2 class="text-xl font-semibold text-text">{{ value.title }}</h2>
            <p class="mt-3 text-sm leading-7 text-ink-muted">{{ value.description }}</p>
          </article>
        }
      </div>
    </section>
  `,
})
export class AboutPage {
  protected readonly stats = companyStats;

  protected readonly values = [
    {
      title: 'Product before pixels',
      description: 'We start with business context, user intent and operational constraints.',
    },
    {
      title: 'Engineering that lasts',
      description: 'Architecture, testing and observability are part of the product, not afterthoughts.',
    },
    {
      title: 'Transparent delivery',
      description: 'Clear scope, tight feedback loops and progress you can understand at every stage.',
    },
  ] as const;
}
