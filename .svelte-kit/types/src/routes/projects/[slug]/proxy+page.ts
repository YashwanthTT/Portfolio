// @ts-nocheck
import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/content';
import type { PageLoad } from './$types';

export const load = ({ params }: Parameters<PageLoad>[0]) => {
	const project = projects.find((p) => p.slug === params.slug);
	if (!project) throw error(404, 'Project not found');
	return { project };
};
