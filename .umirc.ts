import { defineConfig } from 'umi';

export default defineConfig({
  // https://github.com/umijs/umi/issues/10959
  jsMinifier: 'terser',
  hash: true,
  routes: [
    { path: '/', component: 'home' },
    { path: '/docs', component: 'docs' },
  ],
  npmClient: 'pnpm',
});
