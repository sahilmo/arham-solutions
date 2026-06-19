import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="section-shell">
      <div
        class="relative mx-auto max-w-4xl overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-6 text-center shadow-2xl shadow-primary/10 backdrop-blur-xl sm:p-8 lg:p-10"
      >
        <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent"></div>
        <div class="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
        <div class="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl"></div>

        <div class="relative">
          <p class="eyebrow">Contact</p>
          <h2 class="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight text-text sm:text-4xl">
            Ready to build something reliable?
          </h2>

          <div class="mx-auto mt-8 max-w-xl rounded-md border border-white/10 bg-background/60 p-5">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Email</p>
            <a
              href="mailto:arham.workplace@gmail.com"
              class="mt-3 block break-words text-lg font-semibold text-text transition hover:text-accent sm:text-xl"
            >
              arham.workplace&#64;gmail.com
            </a>
          </div>

          <a
            href="mailto:arham.workplace@gmail.com"
            class="mt-8 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-text shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-accent/20"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {}
