import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  template: `
    <section class="relative isolate flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden">
      <div class="absolute inset-0 -z-10 bg-background">
        <div class="absolute left-1/2 top-0 h-[36rem] w-[72rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.32)_0%,_rgba(0,217,255,0.16)_34%,_transparent_68%)] blur-3xl animate-pulse"></div>
        <div class="absolute -left-28 top-28 h-80 w-80 rounded-full bg-primary/25 blur-3xl"></div>
        <div class="absolute -right-24 bottom-16 h-96 w-96 rounded-full bg-accent/15 blur-3xl animate-pulse"></div>
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(248,250,252,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(248,250,252,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20"></div>
        <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent"></div>
        <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent"></div>
      </div>

      <div class="section-shell py-28 text-center sm:py-32 lg:py-36">
        <div class="mx-auto max-w-5xl">
          <div class="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-accent shadow-2xl shadow-accent/10 backdrop-blur-xl">
            <span class="size-2 rounded-full bg-accent shadow-[0_0_22px_#00D9FF]"></span>
            Modern software engineering
          </div>

          <h1 class="mx-auto mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] text-text sm:text-6xl lg:text-7xl">
            Building Reliable Software Solutions
          </h1>

          <p class="mx-auto mt-6 max-w-3xl text-base leading-8 text-ink-muted sm:text-lg">
            Transforming ideas into scalable digital products through modern technologies, intelligent automation and
            innovative software development.
          </p>

          <div class="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              routerLink="/services"
              class="rounded-md bg-primary px-6 py-3 text-center text-sm font-semibold text-text shadow-xl shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-accent/20"
            >
              Explore Services
            </a>
            <a
              routerLink="/products"
              class="rounded-md border border-white/10 bg-white/[0.03] px-6 py-3 text-center text-sm font-semibold text-text shadow-xl shadow-white/5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white/10"
            >
              View Products
            </a>
          </div>

          <div class="mx-auto mt-14 max-w-3xl rounded-lg border border-white/10 bg-white/[0.035] p-2 shadow-2xl shadow-primary/10 backdrop-blur-2xl">
            <div class="grid gap-2 rounded-md border border-white/10 bg-background/60 p-3 sm:grid-cols-3">
              @for (item of trustSignals; track item) {
                <div class="rounded-md bg-white/[0.04] px-4 py-4 text-sm font-medium text-ink-muted">
                  {{ item }}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  protected readonly trustSignals = ['Scalable Products', 'Automation Ready', 'Modern Cloud'];
}
