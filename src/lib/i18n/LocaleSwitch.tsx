"use client";

import { type ReactNode } from "react";
import { useLocale } from "./locale-context";

/**
 * Renders different markup per locale. Use for full-page legal text where
 * each language has its own freeform paragraphs.
 */
export function LocaleSwitch({ en, de }: { en: ReactNode; de: ReactNode }) {
  const { locale } = useLocale();
  return <>{locale === "de" ? de : en}</>;
}
