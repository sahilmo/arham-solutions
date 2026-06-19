import { Component } from '@angular/core';

type StackGroup = {
  title: string;
  description: string;
  items: {
    name: string;
    icon: string;
  }[];
};

@Component({
  selector: 'app-tech-stack',
  template: `
    <section class="relative overflow-hidden border-y border-white/10 bg-white/[0.025]">
      <div class="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"></div>
      <div class="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"></div>

      <div class="section-shell">
        <div class="relative mx-auto max-w-3xl text-center">
          <p class="eyebrow">Technology Stack</p>
          <h2 class="section-title mx-auto">Modern tools for scalable, secure and maintainable products.</h2>
          <p class="section-copy mx-auto">
            We use dependable frontend, backend and infrastructure technologies to build software that is fast to ship
            and calm to operate.
          </p>
        </div>

        <div class="relative mt-12 grid gap-6 lg:grid-cols-3">
          @for (group of stackGroups; track group.title) {
            <article class="rounded-lg border border-white/10 bg-background/60 p-5 shadow-2xl shadow-primary/5 backdrop-blur-xl">
              <div class="border-b border-white/10 pb-5">
                <h3 class="text-xl font-semibold text-text">{{ group.title }}</h3>
                <p class="mt-2 text-sm leading-6 text-ink-muted">{{ group.description }}</p>
              </div>

              <div class="mt-5 grid gap-3">
                @for (item of group.items; track item.name) {
                  <div
                    class="group flex items-center gap-4 rounded-md border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-accent/10"
                  >
                    <span
                      class="grid size-11 shrink-0 place-items-center rounded-md border border-accent/20 bg-accent/10 text-sm font-bold text-accent shadow-lg shadow-accent/10 transition group-hover:border-accent/50 group-hover:bg-accent/15"
                    >
                      {{ item.icon }}
                    </span>
                    <span class="text-sm font-semibold text-text">{{ item.name }}</span>
                  </div>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class TechStackComponent {
  protected readonly stackGroups: StackGroup[] = [
    {
      title: 'Frontend',
      description: 'Interfaces engineered for speed, accessibility and responsive experiences.',
      items: [
        { name: 'Angular', icon: 'A' },
        { name: 'TypeScript', icon: 'TS' },
        { name: 'Tailwind', icon: 'TW' },
      ],
    },
    {
      title: 'Backend',
      description: 'Reliable services, APIs and data platforms for business-critical workflows.',
      items: [
        { name: 'Java', icon: 'J' },
        { name: 'Spring Boot', icon: 'SB' },
        { name: 'Oracle', icon: 'OR' },
        { name: 'PostgreSQL', icon: 'PG' },
        { name: 'MySQL', icon: 'MY' },
      ],
    },
    {
      title: 'Tools',
      description: 'Deployment, collaboration and edge tooling for modern delivery pipelines.',
      items: [
        { name: 'Docker', icon: 'DK' },
        { name: 'GitHub', icon: 'GH' },
        { name: 'Cloudflare', icon: 'CF' },
      ],
    },
  ];
}
