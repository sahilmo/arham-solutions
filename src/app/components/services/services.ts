import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
    <section class="section-shell">
      <div class="mx-auto max-w-3xl text-center">
        <p class="eyebrow">Services</p>
        <h2 class="section-title mx-auto">Software services for modern digital products.</h2>
        <p class="section-copy mx-auto">
          From polished applications to intelligent backend systems, Arham Solutions builds resilient technology that
          scales with your business.
        </p>
      </div>

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        @for (service of serviceCards; track service.title; let index = $index) {
          <article
            class="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-primary/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-accent/40 hover:bg-white/[0.07] hover:shadow-accent/10"
          >
            <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition group-hover:opacity-100"></div>
            <div class="absolute -right-16 -top-16 size-32 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20"></div>

            <span class="relative text-sm font-semibold text-accent">0{{ index + 1 }}</span>
            <h3 class="relative mt-6 text-xl font-semibold text-text">{{ service.title }}</h3>
            <p class="relative mt-4 text-sm leading-7 text-ink-muted">{{ service.description }}</p>
          </article>
        }
      </div>
    </section>
  `,
})
export class ServicesComponent {
  protected readonly serviceCards = [
    {
      title: 'Mobile Application Development',
      description: 'Responsive, high-performance mobile apps with smooth user flows and scalable architecture.',
    },
    {
      title: 'Web Development',
      description: 'Fast, accessible and SEO-ready websites and web apps built with modern frontend technologies.',
    },
    {
      title: 'Backend APIs',
      description: 'Secure API systems, integrations and data services designed for reliability and maintainability.',
    },
    {
      title: 'AI Solutions',
      description: 'Intelligent automation, AI-assisted workflows and practical machine-learning integrations.',
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored digital products that solve specific business problems with clean, durable software.',
    },
  ] as const;
}
