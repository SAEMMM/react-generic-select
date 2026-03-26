import type { SelectChangeEvent } from "@mui/material/Select";

export type SelectValue = string | number;

export interface SelectOption<T extends SelectValue> {
  label: string;
  value: T;
}

export interface CustomSelectProps<T extends SelectValue> {
  value: T;
  options: SelectOption<T>[];
  onChange: (event: SelectChangeEvent<T>) => void;
  label?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  size?: "small" | "medium";
}
