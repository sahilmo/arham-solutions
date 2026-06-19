import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="border-t border-white/10 bg-background/95">
      <div class="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <div class="grid gap-8 md:grid-cols-[1.1fr_0.8fr_1fr]">
          <div>
            <div class="flex items-center gap-3">
              <span class="grid size-9 place-items-center rounded-md bg-gradient-to-br from-primary to-accent text-sm font-bold text-background shadow-lg shadow-accent/20">
                AS
              </span>
              <span class="font-semibold text-text">Arham Solutions</span>
            </div>
            <p class="mt-5 text-sm text-ink-muted">Arham Solutions © 2026</p>
          </div>

          <div>
            <h2 class="text-sm font-semibold text-text">Links</h2>
            <div class="mt-4 grid gap-3 text-sm text-ink-muted">
              <a routerLink="/" class="transition hover:text-accent">Home</a>
              <a routerLink="/services" class="transition hover:text-text">Services</a>
              <a routerLink="/products" class="transition hover:text-text">Products</a>
              <a routerLink="/privacy-policy" class="transition hover:text-text">Privacy Policy</a>
            </div>
          </div>

          <div>
            <h2 class="text-sm font-semibold text-text">Contact</h2>
            <div class="mt-4 grid gap-3 text-sm text-ink-muted">
              <a href="mailto:arham.workplace@gmail.com" class="transition hover:text-accent">
                arham.workplace&#64;gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
