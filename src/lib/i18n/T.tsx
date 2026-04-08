"use client";

import { useLocale } from "./locale-context";
import type { TranslationKey } from "./dictionary";

/**
 * Tiny inline translation primitive. Renders the dictionary entry for the
 * current locale. Can be dropped inside server components — only this leaf
 * is client-side.
 */
export function T({ k }: { k: TranslationKey }) {
  const { t } = useLocale();
  return <>{t(k)}</>;
}
