import type { CustomSelectProps, SelectValue } from "./CustomSelect.types";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import type { SelectChangeEvent } from "@mui/material/Select";

export function CustomSelect<T extends SelectValue>({
  value,
  options,
  onChange,
  label,
  fullWidth = false,
  disabled = false,
  size = "medium",
}: CustomSelectProps<T>) {
  const labelId = label ? `${label}-label` : undefined;

  const handleChange = (event: SelectChangeEvent<T>) => {
    onChange(event);
  };

  return (
    <FormControl fullWidth={fullWidth} disabled={disabled} size={size}>
      {label && <InputLabel id={labelId}>{label}</InputLabel>}

      <Select<T>
        labelId={labelId}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={String(option.value)} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
