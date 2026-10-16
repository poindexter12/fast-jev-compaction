import { wellFormedEnd } from './text.js';
import type { SystemOneAnswer, SystemOneQuestions, SystemOneResponse, SystemOneState } from './types.js';

export const SYSTEM_ONE_URL = 'https://api.typesafe.ai/v1/systemone';
export const DEFAULT_MODEL = 'jev-latest';

export interface SystemOneRequest {
  url: string;
  method: 'POST';
  headers: Record<string, string>;
  body: string;
}

/** The HTTP request for one System One call, for any fetch-like transport. */
export function buildSystemOneRequest(
  params: {
    apiKey: string;
    model?: string;
    baseUrl?: string;
  },
  state: SystemOneState,
  questions: SystemOneQuestions,
): SystemOneRequest {
  return {
    url: params.baseUrl ?? SYSTEM_ONE_URL,
    method: 'POST',
    headers: {
      authorization: `Bearer ${params.apiKey}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: params.model ?? DEFAULT_MODEL,
      state,
      questions,
    }),
  };
}

/** Validates a System One response body; throws on anything but an `answers` object. */
export function parseSystemOneResponse(
  status: number,
  ok: boolean,
  text: string,
): SystemOneResponse {
  if (!ok) {
    throw new Error(`System One request failed (${status}): ${text.slice(0, wellFormedEnd(text, 200))}`);
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new Error('System One returned malformed JSON');
  }
  if (
    parsed === null ||
    typeof parsed !== 'object' ||
    !('answers' in parsed) ||
    parsed.answers === null ||
    typeof parsed.answers !== 'object'
  ) {
    throw new Error('System One response is missing answers');
  }
  return parsed as SystemOneResponse;
}

/** The `noul` probability of one answer; throws when it is not there. */
export function noulAnswer(
  answers: Record<string, SystemOneAnswer>,
  name: string,
): number {
  const answer = answers[name];
  if (
    !answer ||
    !('noul' in answer) ||
    typeof answer.noul !== 'number' ||
    !Number.isFinite(answer.noul)
  ) {
    throw new Error(`Invalid System One answer for ${name}`);
  }
  return answer.noul;
}
