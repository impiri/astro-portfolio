import { Section } from '../components';

const Footer = () => (
  <Section>
    <div className="border-t border-gray-600 pt-5">
      <div className="text-sm text-gray-200">
        © Copyright 2022-{new Date().getFullYear()} Greg Gossett. This site is
        built with <a href="https://astro.build/">Astro</a>. I started with a{' '}
        <a href="https://github.com/ixartz/Astro-boilerplate">boilerplate</a>{' '}
        from <a href="https://creativedesignsguru.com/">ixartz</a>.
      </div>
    </div>
  </Section>
);

export { Footer };
