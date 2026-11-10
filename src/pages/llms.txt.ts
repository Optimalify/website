import type {APIRoute} from 'astro';
import {llmsTxt} from '../templates/llms';

export const GET: APIRoute = async () => llmsTxt('ja');
