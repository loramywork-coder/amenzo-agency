"use client";

import { useState, useCallback } from "react";

export function useDemoToast() {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = useCallback((msg?: string) => {
    setToast(msg || "This is a demo \u2014 your message was not sent. In a real site, this would reach the business owner.");
    setTimeout(() => setToast(null), 4000);
  }, []);

  return { toast, showToast };
}

export function DemoToast({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] bg-black/90 text-white text-sm px-6 py-3 rounded-lg shadow-lg max-w-md text-center animate-[fadeIn_0.3s_ease]">
      {message}
    </div>
  );
}
