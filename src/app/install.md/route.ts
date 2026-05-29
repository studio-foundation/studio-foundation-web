import { markdownResponse, pageMarkdown } from '@/lib/llms-content';

export const GET = () => markdownResponse(pageMarkdown('en', 'install'));
