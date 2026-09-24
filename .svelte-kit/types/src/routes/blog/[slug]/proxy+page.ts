// @ts-nocheck
import { error } from '@sveltejs/kit';
import { posts } from '$lib/data/content';
import type { PageLoad } from './$types';

export const load = ({ params }: Parameters<PageLoad>[0]) => {
	const post = posts.find((p) => p.slug === params.slug);
	if (!post) throw error(404, 'Post not found');
	return { post };
};
