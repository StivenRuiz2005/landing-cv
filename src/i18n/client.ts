const el = document.getElementById("i18n");

// Textos del idioma activo (los inyecta BaseLayout)
export const t: any = el ? JSON.parse(el.textContent || "{}") : {};

export const fmt = (s: string, v: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(v[k] ?? ""));
