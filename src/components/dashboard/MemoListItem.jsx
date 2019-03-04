import React from "react";
import { Grid, Card, CardContent, Typography, FormHelperText } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
var styles = {
  card: {
    display: 'flex',
    justifyContent: 'center',
  },
  memoLearned: {
    backgroundColor: 'purple',
  },
  memoNotLearned: {

  }
}
const MemoListItem = (props) => {
  const { memo, classes } = props;
  const { sourceWord } = memo;
  const learnClass = memo.isLearned ? classes.memoLearned : classes.memoNotLearned;
  const memoClassName = classes.card + " " + learnClass;
  console.log(memoClassName);
  return (
    <Grid item xs={3} >
      <Card className={memoClassName}>
        <CardContent>
          <Typography  variant="h4" component="h2" >
            {sourceWord}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
export default withStyles(styles)(MemoListItem);