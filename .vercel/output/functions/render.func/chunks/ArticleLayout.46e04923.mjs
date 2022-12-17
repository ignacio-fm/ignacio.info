import { c as createMetadata, $ as $$module1, a as $$module2, b as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, f as $$Container, m as maybeRenderHead, g as addAttribute, h as renderSlot, i as $$Layout } from '../entry.js';
import '@astrojs/vercel/serverless/entrypoint';
import 'react';
import 'react-dom/server';
import 'html-escaper';
import 'mime';
import 'kleur/colors';
import 'image-size';
import 'node:fs/promises';
import 'node:url';
import 'node:worker_threads';
import 'os';
import 'web-streams-polyfill';
import 'worker_threads';
import 'node:fs';
import 'module';
/* empty css                    */import '@altano/tiny-async-pool';
import 'node:os';
import 'node:path';
import 'magic-string';
import 'node:stream';
import 'slash';
/* empty css                    */import '@headlessui/react';
import 'react/jsx-runtime';
import 'clsx';
import 'use-mailchimp-form';
import 'cookie';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const $$metadata = createMetadata("/@fs/C:/Users/nacho/Desktop/Proyectos/ignacio.info/src/layouts/ArticleLayout.astro", { modules: [{ module: $$module1, specifier: "../components/Container.astro", assert: {} }, { module: $$module2, specifier: "./Layout.astro", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
const $$Astro = createAstro("/@fs/C:/Users/nacho/Desktop/Proyectos/ignacio.info/src/layouts/ArticleLayout.astro", "https://ignacio.info/", "file:///C:/Users/nacho/Desktop/Proyectos/ignacio.info/");
const $$ArticleLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": () => renderTemplate`${renderComponent($$result, "Container", $$Container, { "class": "mt-16 lg:mt-32" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<div class="xl:relative">
      <div class="mx-auto max-w-2xl">
        <a type="button" href="/articulos" aria-label="Volver a artículos" class="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400">
            <path d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
        <article>
          <header class="flex flex-col">
            <h1 class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              ${frontmatter.title}
            </h1>
            <time${addAttribute(frontmatter.date, "datetime")} class="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500">
              <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
              <span class="ml-3">${new Date(frontmatter.publishDate).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })}
              </span>
            </time>
          </header>
          <!-- Prose -->
          <div class="prose dark:prose-invert">
            ${renderSlot($$result, $$slots["default"])}
          </div>
        </article>
      </div>
    </div>` })}` })}`;
});

const $$file = "C:/Users/nacho/Desktop/Proyectos/ignacio.info/src/layouts/ArticleLayout.astro";
const $$url = undefined;

export { $$metadata, $$ArticleLayout as default, $$file as file, $$url as url };
