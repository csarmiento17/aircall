import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PhoneCallbackIcon from "@material-ui/icons/PhoneCallback";
import PhoneForwardedIcon from "@material-ui/icons/PhoneForwarded";

const useStyles = makeStyles({
  card: {
    marginBottom: ".5em",
  },
});

const ActivityFeed = ({ data }) => {
  const classes = useStyles();
  console.log(data);
  return (
    <Card>
      <CardContent style={{ padding: "0" }}>
        <Grid item container xs={12} spacing={2} className={classes.card}>
          <Grid item xs={2}>
            {data.direction === "outbound" ? (
              <PhoneForwardedIcon />
            ) : (
              <PhoneCallbackIcon />
            )}
          </Grid>
          <Grid item xs={7}>
            <Typography variant="subtitle2" display="block">
              {data.from}
            </Typography>
            <Typography variant="caption" display="block">
              {" "}
              {data.direction === "outbound"
                ? `tried calling ${data.to}`
                : `incoming call from ${data.from}`}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle2" display="block">
              {data.created_at}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
