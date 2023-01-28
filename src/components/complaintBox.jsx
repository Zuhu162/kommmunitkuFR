import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import complaints from "../assets/fakeData";
import { Button } from "@mui/material";
import palette from "./palette";

const columns = [
  { field: "jenis", headerName: "Jenis", width: 300 },
  { field: "lokasi", headerName: "Lokasi", width: 300 },
  { field: "tarikh", headerName: "Tarikh Aduan", width: 200 },
  { field: "status", headerName: "Status ", width: 200 },
  {
    field: "tinduan",
    headerName: "Tinduan ",
    width: 100,
  },
];

export default function ComplaintBox() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={complaints}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick="true"
      />
      <Button
        sx={{ backgroundColor: palette.red, marginRight: "30px" }}
        variant="contained"
      >
        Selesai
      </Button>
      <Button sx={{ backgroundColor: palette.red }} variant="contained">
        Arkibkan
      </Button>
    </div>
  );
}
