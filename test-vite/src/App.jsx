import { useState, useEffect } from "react";
import * as API from "./services/launches/";
import { Heading } from '@chakra-ui/react';
import { LaunchItem } from "./components/LaunchItem";
import { Grid } from '@chakra-ui/react'
export function App() {

  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <div>
      <Heading as ="h1" size="lg" my={4} ml={2}>
        SpaceX Launches
      </Heading>
      <section>
        <Grid templateColumns='repeat(2, 1fr)' gap={2}>
          {launches.map((launch) => (
            <LaunchItem key={launch.flight_number} {... launch} />
          ))}
        </Grid>
      </section>
    </div>
  )
}
