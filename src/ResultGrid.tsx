import React from 'react';
import { Grid } from '@mui/material';

export interface gridProps {
    rows: number;
    columns: number;
    cellSize: number;
}


export function ResultGrid(props: gridProps): React.ReactElement<gridProps> {
    var pointsForLeftTriangle: string = props.cellSize + " " + props.cellSize + ", 0 " + props.cellSize + ", 0 0";
    var pointsForRightTriangle: string = props.cellSize + " " + props.cellSize + ", " + props.cellSize + " 0, 0 0";
    console.log(pointsForLeftTriangle);
    console.log(pointsForRightTriangle);
    let row = [];
    for (var i = 0; i < props.columns / 2; i++) {
        row.push(
            <Grid item spacing='None'>
                <svg height={props.cellSize} width={props.cellSize}>
                    <polygon id='1' points={pointsForLeftTriangle} fill='aqua'></polygon>
                    <polygon id='2' points={pointsForRightTriangle}></polygon>
                </svg>
            </Grid>);
    }
    let rowContainer = <Grid container direction={"row"} spacing={'none'} justifyContent={"center"}>{row}</Grid>;

    let rows = []
    for (var j = 0; j < props.rows; j++) {
        rows.push(<Grid item spacing={'none'} justifyContent={"center"}>{rowContainer}</Grid>);
    }

    return <><Grid container direction={"column"} spacing={'none'}>{rows}</Grid></>;
}