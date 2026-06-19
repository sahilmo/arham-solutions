import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type NavLink = {
  label: string;
  path: string;
};

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="sticky inset-x-0 top-0 z-50 border-b border-white/10 bg-background/70 shadow-lg shadow-primary/5 backdrop-blur-2xl">
      <nav class="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a routerLink="/" class="group flex items-center gap-3" aria-label="Arham Solutions home">
          <span
            class="grid size-9 place-items-center rounded-md bg-gradient-to-br from-primary to-accent text-sm font-bold text-background shadow-lg shadow-accent/20"
          >
            AS
          </span>
          <span class="text-sm font-semibold tracking-wide text-text transition group-hover:text-accent">
            Arham Solutions
          </span>
        </a>

        <div class="hidden items-center gap-1 md:flex">
          @for (link of links; track link.path) {
            <a
              [routerLink]="link.path"
              routerLinkActive="border-accent/30 bg-accent/10 text-text"
              [routerLinkActiveOptions]="{ exact: link.path === '/' }"
              class="rounded-md border border-transparent px-3 py-2 text-sm font-medium text-ink-muted transition hover:border-white/10 hover:bg-white/10 hover:text-text"
            >
              {{ link.label }}
            </a>
          }
        </div>

        <a
          routerLink="/contact"
          class="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-text shadow-lg shadow-primary/25 transition hover:bg-blue-500 md:inline-flex"
        >
          Contact
        </a>

        <button
          type="button"
          class="grid size-10 place-items-center rounded-md border border-white/10 bg-white/[0.03] text-text transition hover:border-accent/40 hover:bg-accent/10 md:hidden"
          aria-label="Toggle navigation"
          [attr.aria-expanded]="menuOpen()"
          (click)="menuOpen.update((open) => !open)"
        >
          <span class="h-0.5 w-5 bg-current before:mb-1.5 before:block before:h-0.5 before:bg-current after:mt-1.5 after:block after:h-0.5 after:bg-current"></span>
        </button>
      </nav>

      @if (menuOpen()) {
        <div class="border-t border-white/10 bg-background/95 px-5 py-4 shadow-2xl shadow-primary/10 backdrop-blur-2xl md:hidden">
          <div class="mx-auto grid max-w-7xl gap-2">
            @for (link of links; track link.path) {
              <a
                [routerLink]="link.path"
                routerLinkActive="bg-accent/10 text-text"
                [routerLinkActiveOptions]="{ exact: link.path === '/' }"
                class="rounded-md px-3 py-3 text-sm font-medium text-ink-muted transition hover:bg-white/10 hover:text-text"
                (click)="menuOpen.set(false)"
              >
                {{ link.label }}
              </a>
            }
          </div>
        </div>
      }
    </header>
  `,
})
export class NavbarComponent {
  protected readonly menuOpen = signal(false);

  protected readonly links: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];
}
