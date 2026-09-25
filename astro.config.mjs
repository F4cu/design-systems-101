// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://f4cu.github.io',
	base: '/ds101',
	// Old page URLs from before file names were unified with page titles
	redirects: {
		'/adoption-measurement/': '/ds101/measuring-adoption/',
		'/ai-context-and-readiness/': '/ds101/ai-readiness/',
		'/component-building/': '/ds101/component-composition-in-figma/',
		'/component-architecture/': '/ds101/component-composition-in-figma/',
		'/component-taxonomy/': '/ds101/component-composition-in-code/',
		'/contextual-component-performance/': '/ds101/performance-in-context/',
		'/feedback-loops/': '/ds101/generative-loops/',
		'/foundations/': '/ds101/what-a-design-system-is/',
		'/governance-under-ai-consumption/': '/ds101/governance-for-ai/',
		'/scaling-ai-effort/': '/ds101/scaling-ai-effort-to-risk/',
		'/component-governance/': '/ds101/decision-governance/',
	},
	integrations: [
		mermaid({
			theme: 'neutral',
		}),
		starlight({
			title: 'DS101',
			description:
				'A field guide to running design systems — token architecture, governance, adoption, and AI-readiness.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/F4cu/ds101' }],
			customCss: ['./src/styles/custom.css'],
			// Wrap long code lines instead of scrolling sideways on phones
			expressiveCode: { defaultProps: { wrap: true } },
			sidebar: [
				{ label: 'Start here', link: '/' },
				{
					label: 'Foundations',
					items: [
						'what-a-design-system-is',
						'token-architecture',
						'component-composition-in-code',
						'component-composition-in-figma',
						'design-to-code-contract',
						'component-accessibility',
						'layout-accessibility',
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
						'team-models',
						'decision-governance',
						'component-lifecycle',
						'contribution-models',
						'fostering-contribution',
						'onboarding-adopters',
						'operating-cadence',
						'release-management',
						'design-system-maturity',
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
					items: [
						'communicating-value',
						'estimating-roi',
						'business-alignment',
						'brand-alignment',
						'stakeholder-alignment',
					],
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
