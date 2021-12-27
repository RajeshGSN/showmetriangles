import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { gridProps } from './ResultGrid';

export function GridInputCard(props: any): React.ReactElement<any> {
    const [rows, setRows] = React.useState(6);
    const [columns, setColumns] = React.useState(12);
    const [cellSize, setCellSize] = React.useState(100);

    useEffect(() => props.updateGridInputsFromCard({ rows: rows, columns: columns, cellSize: cellSize } as gridProps), [rows, columns, cellSize]);

    return <>
        <br></br>
        <br></br>
        <Grid container direction={"row"} spacing={3} justifyContent="center">
            <Grid item>
                <TextField
                    id="outlined-number"
                    label="rows"
                    type="number"
                    onChange={(event) => setRows(Number(event.target.value))}
                    value={rows}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item>
                <TextField
                    id="outlined-number"
                    label="columns"
                    value={columns}
                    onChange={(event) => setColumns(Number(event.target.value))}
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                /> </Grid>
            <Grid item>
                <TextField
                    id="outlined-number"
                    label="cell size"
                    type="number"
                    value={cellSize}
                    onChange={(event) => setCellSize(Number(event.target.value))}
                    InputLabelProps={{
                        shrink: true,
                    }}
                /> </Grid>
            <Grid item>
                <Button variant="contained" color="error" onClick={() => { setRows(6); setColumns(12); setCellSize(100); }}> Reset </Button>
            </Grid>
        </Grid>
    </>
}