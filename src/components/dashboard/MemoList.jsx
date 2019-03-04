import React from "react";
import { Grid } from "@material-ui/core";
import MemoListItem from "./MemoListItem.jsx";
import { withStyles } from "@material-ui/styles";

const styles = {
  grid: {
    marginTop: 5,
  }
}

const MemoList = (props) => {
  const { memos, classes } = props;
  return (
    <Grid container spacing={24} className={classes.grid}>
    {memos && memos.map(memo => <MemoListItem memo={memo} />)}
    </Grid>
  );
}

export default withStyles(styles)(MemoList);