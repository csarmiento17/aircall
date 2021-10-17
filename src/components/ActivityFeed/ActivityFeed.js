import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PhoneCallbackIcon from "@material-ui/icons/PhoneCallback";
import PhoneForwardedIcon from "@material-ui/icons/PhoneForwarded";

const useStyles = makeStyles({
  card: {
    marginBottom: ".5em",
    width: "100%"
  },
});

const ActivityFeed = ({ data }) => {
  const classes = useStyles();
  return (
  
    <Grid item xs={12}>
    <Card>
      <CardContent style={{ padding: "10px" }}>
          <Grid item xs={1}>
            {data.direction === "outbound" ? (
              <PhoneForwardedIcon />
            ) : (
              <PhoneCallbackIcon />
            )}
          </Grid>
          <Grid item xs={9}>
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
        
      
      </CardContent>
    </Card> 
    </Grid>

  );
};

export default ActivityFeed;
