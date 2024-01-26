import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { CardPublication } from "../../components/CardPublication";
import useApi from "../../hooks/useApi";
import { useStyles } from "./styles";

export const Home = () => {
  const classes = useStyles();
  /* The code `const [getList, data] = useApi({ method: "get", endpoint: "/blogs" });` is using a custom
hook called `useApi` to make an API request to retrieve a list of blogs. */
  const [getList, data] = useApi({
    method: "get",
    endpoint: "/blogs",
  });

  useEffect(() => {
    getList();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} md={12} className={classes.mainContent}>
        <Grid className={classes.blur}>
          <Typography variant="h1" className={classes.title}>
            Nuestro blog
          </Typography>
          <Typography variant="h4" className={classes.subtitle}>
            Un espacio para compartir nuestras experiencias y aprendizajes
          </Typography>
        </Grid>
      </Grid>
      <Container className={classes.container}>
        <Grid item md={12} xs={12}>
          <Grid container spacing={2}>
            {data?.map((publication) => (
              <Grid item md={4} key={publication.title}>
                <CardPublication publication={publication} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
