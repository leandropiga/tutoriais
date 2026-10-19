// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
	site: 'https://leandropiga.github.io',
	base: '/tutoriais',
	integrations: [
		starlight({
			title: 'Tutoriais',
			description: 'Tutoriais práticos de programação com IA, para quem já programa.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Português', lang: 'pt-BR' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/leandropiga/tutoriais' },
			],
			plugins: [
				// Cada tutorial é um "topic": a barra lateral mostra só o tutorial atual.
				starlightSidebarTopics([
					{
						label: 'SDD na prática',
						icon: 'open-book',
						link: '/ia-no-desenvolvimento/sdd-na-pratica/',
						items: [
							{ autogenerate: { directory: 'ia-no-desenvolvimento/sdd-na-pratica' } },
						],
					},
				], {
					// Home e página do assunto ficam fora dos tópicos.
					exclude: ['/', '/ia-no-desenvolvimento', '/ia-no-desenvolvimento/'],
				}),
			],
		}),
	],
});
