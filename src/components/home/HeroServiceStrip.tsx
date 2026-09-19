const items = ["Websites", "Apps", "Shopify", "AI & Automation", "UI/UX", "CRO"];

export function HeroServiceStrip() {
  return (
    <ul className="mx-auto flex max-w-[900px] flex-wrap items-center justify-center gap-x-5 gap-y-2 px-5 text-[0.8rem] tracking-tight text-ink/45 sm:gap-x-8">
      {items.map((label, i) => (
        <li key={label} className="flex items-center gap-5 sm:gap-8">
          {label}
          {i < items.length - 1 && <span aria-hidden className="h-[3px] w-[3px] rounded-full bg-ink/25" />}
        </li>
      ))}
    </ul>
  );
}
