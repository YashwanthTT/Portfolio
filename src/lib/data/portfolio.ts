export const portfolio = {
	name: 'Yashwanth',
	role: 'Software Engineer',
	about: {
		intro: 'building thoughtful, fast, well-crafted software for the web.',
		paragraphs: [
			'I care about the small details — typography, motion, performance, and the quiet craft of a clean interface. Most of my time goes into building tools, interfaces, and infrastructure that feel effortless to use.',
			'Currently exploring systems design, edge runtimes, and the intersection of local-first software with the modern web.'
		]
	},
	socials: [
		{ label: 'GitHub', href: 'https://github.com/' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/' },
		{ label: 'Twitter', href: 'https://twitter.com/' },
		{ label: 'Email', href: 'mailto:hello@example.com' }
	],
	experience: [
		{
			company: 'Acme Corp',
			role: 'Senior Software Engineer',
			period: '2024 — Present',
			location: 'Remote',
			points: [
				'Lead the design and build of a customer-facing analytics platform used by 10k+ users.',
				'Reduced p95 page load by 38% by rearchitecting the data-fetching layer.'
			]
		},
		{
			company: 'Northwind Labs',
			role: 'Software Engineer',
			period: '2022 — 2024',
			location: 'Bangalore, IN',
			points: [
				'Built and shipped the payments microservice handling $2M+ monthly volume.',
				'Migrated the legacy monolith to a typed, modular TypeScript codebase.'
			]
		},
		{
			company: 'Contoso',
			role: 'Frontend Engineer Intern',
			period: '2021 — 2022',
			location: 'Hybrid',
			points: [
				'Implemented the marketing site redesign with a focus on accessibility and Core Web Vitals.'
			]
		}
	],
	projects: [
		{
			name: 'Loom',
			tagline: 'Coding Agent that helps you write code faster.',
			stack: ['TypeScript', 'OpenTUI'],
			href: '#'
		}
	]
};
