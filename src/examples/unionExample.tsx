import { CustomSelect } from "../components/CustomSelect";
import type { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

type Status = "ACTIVE" | "INACTIVE" | "PENDING";

const statusOptions: { label: string; value: Status }[] = [
  { label: "활성", value: "ACTIVE" },
  { label: "비활성", value: "INACTIVE" },
  { label: "대기", value: "PENDING" },
];

export function UnionExample() {
  const [value, setValue] = useState<Status>("ACTIVE");

  const handleChange = (event: SelectChangeEvent<Status>) => {
    setValue(event.target.value as Status);
  };

  return (
    <CustomSelect
      label="Status"
      value={value}
      options={statusOptions}
      onChange={handleChange}
      fullWidth
    />
  );
}
