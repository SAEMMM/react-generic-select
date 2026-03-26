import { CustomSelect } from "../components/CustomSelect";
import type { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const numberOptions = [
  { label: "10개", value: 10 },
  { label: "20개", value: 20 },
  { label: "30개", value: 30 },
];

export function NumberExample() {
  const [value, setValue] = useState<number>(10);

  const handleChange = (event: SelectChangeEvent<number>) => {
    setValue(Number(event.target.value));
  };

  return (
    <CustomSelect
      label="Page Size"
      value={value}
      options={numberOptions}
      onChange={handleChange}
      fullWidth
    />
  );
}
