export const NAV_KEYS = ['home', 'mission', 'charter', 'install', 'contribute'] as const;
export type NavKey = (typeof NAV_KEYS)[number];

export const NAV_HREFS: Record<NavKey, string> = {
  home: '/',
  mission: '/mission',
  charter: '/charter',
  install: '/install',
  contribute: '/contribute',
};

export const GITHUB_URL = 'https://github.com/studio-foundation/studio';
