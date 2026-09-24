// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://f4cu.github.io',
	base: '/design-systems-101',
	// Old page URLs from before file names were unified with page titles
	redirects: {
		'/adoption-measurement/': '/design-systems-101/measuring-adoption/',
		'/ai-context-and-readiness/': '/design-systems-101/ai-readiness/',
		'/component-building/': '/design-systems-101/component-architecture/',
		'/contextual-component-performance/': '/design-systems-101/performance-in-context/',
		'/feedback-loops/': '/design-systems-101/generative-loops/',
		'/foundations/': '/design-systems-101/what-a-design-system-is/',
		'/governance-under-ai-consumption/': '/design-systems-101/governance-for-ai/',
		'/scaling-ai-effort/': '/design-systems-101/scaling-ai-effort-to-risk/',
	},
	integrations: [
		mermaid({
			theme: 'neutral',
		}),
		starlight({
			title: 'Design Systems 101',
			description:
				'A field guide to running design systems — token architecture, governance, adoption, and AI-readiness.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/F4cu/design-systems-101' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Start here', link: '/' },
				{
					label: 'Foundations',
					items: [
						'what-a-design-system-is',
						'token-architecture',
						'component-taxonomy',
						'component-architecture',
						'design-to-code-contract',
						'component-api-design',
						'multi-platform-component-specs',
						'platform-divergence',
						'ui-audit',
						'pilot-strategy',
					],
				},
				{
					label: 'Governance',
					items: [
						'component-governance',
						'operating-cadence',
						'design-system-maturity',
						'contribution-models',
						'fostering-contribution',
						'release-management',
						'governance-case-studies',
						'scaling-across-decades',
						'inheriting-a-legacy-system',
					],
				},
				{
					label: 'Metrics',
					items: [
						'measuring-adoption',
						'performance-in-context',
						'dependency-observability',
						'documentation-coverage',
					],
				},
				{
					label: 'Business alignment',
					items: ['communicating-value', 'business-alignment', 'brand-alignment', 'stakeholder-alignment'],
				},
				{
					label: 'Agentic AI',
					items: [
						'ai-readiness',
						'context-engineering',
						'documentation-for-agents',
						'agentic-ui-patterns',
						'generative-loops',
						'governance-for-ai',
						'agentic-workflow-design',
						'ai-output-discipline',
						'ci-for-agentic-workflows',
						'scaling-ai-effort-to-risk',
					],
				},
				{ label: 'Glossary', link: '/glossary/' },
				{ label: 'References', link: '/references/' },
			],
		}),
	],
});
