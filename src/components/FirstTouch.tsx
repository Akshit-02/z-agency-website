"use client";

import { useEffect } from "react";
import { recordFirstTouch } from "@/lib/attribution";

/** Records the session's landing page, referrer and UTM tags (see lib/attribution). */
export function FirstTouch() {
  useEffect(() => {
    recordFirstTouch();
  }, []);
  return null;
}
