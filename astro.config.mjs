// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeFlexoki({
			    accentColor: "blue",
			})],
			title: 'OnPrem.in',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/rohityadavcloud' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'CloudStack Ubuntu/KVM Install Guide', slug: 'guides/cloudstack' },
						{ label: 'Ceph Deployment Guide', slug: 'guides/ceph' },
						{ label: 'Wireguard Setup Guide', slug: 'guides/wireguard' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
