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
            logo: {
                light: '/src/assets/onprem.svg',
                dark: '/src/assets/onprem.svg',
            },
            head: [
              {
                tag: "script",
                attrs: {
                  src: "https://www.googletagmanager.com/gtag/js?id=G-C6LSEE58JB",
                  defer: true,
                },
              },
              {
                tag: "script",
                content:
                  "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-C6LSEE58JB');",
              },
            ],
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/rohityadavcloud' }],
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'CloudStack Install Guide', slug: 'guides/cloudstack' },
                        { label: 'Ceph Deployment Guide', slug: 'guides/ceph' },
                        { label: 'Wireguard Setup Guide', slug: 'guides/wireguard' },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
            ],
            customCss: [
                // Relative path to your custom CSS file
                './src/styles/custom.css',
            ],
            lastUpdated: true,
        }),
    ],
});
