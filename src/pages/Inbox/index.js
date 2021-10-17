import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCalls } from "../../redux/actions/calls-activities";
import Grid from "@material-ui/core/Grid";
import ActivityFeed from "../../components/ActivityFeed/ActivityFeed";
import Spinner from "../../components/Spinner";

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector(
    (state) => state.callsReducer.callActivities.loading
  );
  const callList = useSelector((state) => state.callsReducer.callActivities);

  useEffect(() => {
    dispatch(getAllCalls());
  }, [dispatch]);

  return (
    <Grid container >
      {loading ? (
        <Spinner />
      ) : (
       callList.filter((call) => call.is_archived === false).map(data => <ActivityFeed key={data.id} data={data}/>)
      )}
    </Grid>

  );
};

export default Home;
