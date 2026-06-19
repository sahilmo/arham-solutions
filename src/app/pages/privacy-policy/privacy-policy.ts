import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy-page',
  template: `
    <section class="section-shell pt-32">
      <p class="eyebrow">Privacy Policy</p>
      <h1 class="section-title">We treat personal information with care and restraint.</h1>
      <p class="section-copy">
        This policy explains how Arham Solutions handles information shared through our website and project inquiry
        channels.
      </p>

      <div class="mt-12 grid gap-6">
        @for (section of policySections; track section.title) {
          <article class="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <h2 class="text-xl font-semibold text-text">{{ section.title }}</h2>
            <p class="mt-3 text-sm leading-7 text-ink-muted">{{ section.copy }}</p>
          </article>
        }
      </div>
    </section>
  `,
})
export class PrivacyPolicyPage {
  protected readonly policySections = [
    {
      title: 'Information we collect',
      copy: 'We collect details you voluntarily submit, such as name, email address, company context and project requirements.',
    },
    {
      title: 'How we use information',
      copy: 'We use inquiry information to respond, plan discovery conversations and provide relevant service recommendations.',
    },
    {
      title: 'Data sharing',
      copy: 'We do not sell personal information. We only share data with trusted service providers when needed to operate our website or communicate with you.',
    },
    {
      title: 'Retention and control',
      copy: 'You can request correction or deletion of your contact information by emailing hello@arhamsolutions.in.',
    },
  ] as const;
}
