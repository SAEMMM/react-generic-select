import { CustomSelect } from "../components/CustomSelect";
import type { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

type ReportType = "DAILY" | "WEEKLY" | "MONTHLY";

const reportTypeOptions: { label: string; value: ReportType }[] = [
  { label: "일간 리포트", value: "DAILY" },
  { label: "주간 리포트", value: "WEEKLY" },
  { label: "월간 리포트", value: "MONTHLY" },
];

export function EnumExample() {
  const [value, setValue] = useState<ReportType>("DAILY");

  const handleChange = (event: SelectChangeEvent<ReportType>) => {
    setValue(event.target.value as ReportType);
  };

  return (
    <CustomSelect
      label="Report Type"
      value={value}
      options={reportTypeOptions}
      onChange={handleChange}
      fullWidth
    />
  );
}
