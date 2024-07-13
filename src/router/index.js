import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: () => import('../layouts/MainLayout.vue'),
			children: [
				{
					path: '/',
					name: 'PhoneBook',
					component: () => import('../views/PhoneBook.vue'),
				},
			],
		},
		{
			//As the application only has this page and does not have a page for "Not Found (404)"
			//any route will send it to the home page
			path: '/:catchAll(.*)',
			redirect: '/',
		},
	],
});

export default router;
