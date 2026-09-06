export type Stat = {
  value: string;
  numeric: number;
  suffix: string;
  label: string;
};

/** Centralized so these are easy to update as the agency's track record grows. */
export const stats: Stat[] = [
  { value: "50+", numeric: 50, suffix: "+", label: "Digital products delivered" },
  { value: "10+", numeric: 10, suffix: "+", label: "Industries served" },
  { value: "95%", numeric: 95, suffix: "%", label: "Client satisfaction" },
  { value: "6", numeric: 6, suffix: "", label: "Core service disciplines" },
];
