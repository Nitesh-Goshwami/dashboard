import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function AttendanceButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
        Attendance
      </Button>
    </Stack>
  );
}
