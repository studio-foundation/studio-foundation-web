// Source unique pour l'URL canonique du site. Le slash final est retiré ici
// pour qu'aucun consommateur ne produise de `//` en concaténant un href qui
// commence déjà par `/` (cf. STU — double slash dans llms.txt / sitemap).
// `WEBSITE_SITE_URL` (Vercel) peut être défini avec ou sans slash final.
export const SITE_URL = (process.env.WEBSITE_SITE_URL ?? 'https://studio-foundation.org').replace(/\/+$/, '');
