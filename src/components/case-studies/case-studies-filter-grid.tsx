"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { caseStudies } from "@/data/case-studies";
import { services } from "@/data/services";
import { CaseStudyCard } from "./case-study-card";
import { cn } from "@/lib/utils";

const industries = Array.from(new Set(caseStudies.map((cs) => cs.industry)));
const technologies = Array.from(new Set(caseStudies.flatMap((cs) => cs.technologies))).sort();

export function CaseStudiesFilterGrid() {
  const [industry, setIndustry] = useState<string | null>(null);
  const [service, setService] = useState<string | null>(null);
  const [technology, setTechnology] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return caseStudies.filter((cs) => {
      if (industry && cs.industry !== industry) return false;
      if (service && !cs.serviceSlugs.includes(service)) return false;
      if (technology && !cs.technologies.includes(technology)) return false;
      return true;
    });
  }, [industry, service, technology]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-y border-line py-6">
        <FilterRow
          label="Industry"
          active={industry}
          onSelect={setIndustry}
          options={industries.map((i) => ({ value: i, label: i }))}
        />
        <FilterRow
          label="Service"
          active={service}
          onSelect={setService}
          options={services.map((s) => ({ value: s.slug, label: s.shortName }))}
        />
        <FilterRow
          label="Technology"
          active={technology}
          onSelect={setTechnology}
          options={technologies.map((t) => ({ value: t, label: t }))}
        />
      </div>

      <p className="mt-8 font-mono-label text-xs uppercase tracking-wide text-ink-faint">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
      </p>

      <motion.div layout className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((cs) => (
          <motion.div key={cs.slug} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <CaseStudyCard caseStudy={cs} />
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-ink-faint">
          No projects match those filters yet — try clearing one.
        </p>
      )}
    </div>
  );
}

function FilterRow({
  label,
  options,
  active,
  onSelect,
}: {
  label: string;
  options: { value: string; label: string }[];
  active: string | null;
  onSelect: (value: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <span className="mr-1 font-mono-label text-xs uppercase tracking-wide text-ink-faint">
        {label}
      </span>
      <button
        type="button"
        onClick={() => onSelect(null)}
        className={cn(
          "font-mono-label text-xs uppercase tracking-wide",
          !active ? "text-ink" : "text-ink-faint hover:text-ink-soft",
        )}
      >
        All
      </button>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onSelect(active === opt.value ? null : opt.value)}
          className={cn(
            "font-mono-label text-xs uppercase tracking-wide",
            active === opt.value ? "text-ink" : "text-ink-faint hover:text-ink-soft",
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
