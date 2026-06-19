import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-product',
  template: `
    <section class="section-shell">
      <div class="mx-auto max-w-5xl">
        <div
          class="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-primary/10 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-accent/40 hover:bg-white/[0.07] hover:shadow-accent/10 sm:p-8 lg:p-10"
        >
          <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent"></div>
          <div class="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl transition group-hover:bg-primary/30"></div>
          <div class="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl transition group-hover:bg-accent/25"></div>

          <div class="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div class="mx-auto flex aspect-square w-full max-w-xs items-center justify-center rounded-lg border border-white/10 bg-background/70 p-6 shadow-2xl shadow-primary/10">
              <div class="grid size-40 place-items-center rounded-[2rem] bg-gradient-to-br from-primary via-blue-500 to-accent text-center shadow-2xl shadow-accent/20">
                <div>
                  <p class="text-5xl font-semibold text-text">30</p>
                  <p class="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-text/80">Ramadan</p>
                </div>
              </div>
            </div>

            <div>
              <p class="eyebrow">Featured Product</p>
              <h2 class="mt-4 text-3xl font-semibold leading-tight text-text sm:text-4xl lg:text-5xl">
                Ramadan Calendar
              </h2>
              <p class="mt-5 max-w-2xl text-base leading-8 text-ink-muted sm:text-lg">
                Simple and reliable Islamic calendar application.
              </p>

              <a
                href="https://play.google.com/store/apps/details?id=com.arham.ramadan_calender"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-8 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-text shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-accent/20"
              >
                View on Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class FeaturedProductComponent {}
