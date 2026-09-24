// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://f4cu.github.io',
	base: '/design-systems-101',
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
						'foundations',
						'token-architecture',
						'component-taxonomy',
						'component-building',
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
						'adoption-measurement',
						'contextual-component-performance',
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
						{ slug: 'ai-context-and-readiness', label: 'AI readiness' },
						'context-engineering',
						'documentation-for-agents',
						'agentic-ui-patterns',
						'feedback-loops',
						'governance-under-ai-consumption',
						'agentic-workflow-design',
						'ai-output-discipline',
						'ci-for-agentic-workflows',
						{ slug: 'scaling-ai-effort', label: 'Scaling AI effort' },
					],
				},
				{ label: 'Glossary', link: '/glossary/' },
				{ label: 'References', link: '/references/' },
			],
		}),
	],
});
