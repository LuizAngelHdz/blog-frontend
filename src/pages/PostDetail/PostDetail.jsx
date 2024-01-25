import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Interweave } from "interweave";

export const PostDetail = () => {
  const [getInfo, data] = useApi({ endpoint: "/blogs", method: "get" });
  const navigate = useNavigate();

  const { id } = useParams();
  const [infoPost, setinfoPost] = useState(null);

  useEffect(() => {
    getInfo({ urlParams: id });
  }, [id]);

  useEffect(() => {
    if (data && infoPost === null) {
      setinfoPost(data[0]);
    }
  }, [data]);

  return (
    <Container>
      <Grid container>
        <Grid item md={12}>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button
              size="small"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate(-1)}
            >
              Regresar
            </Button>
          </Grid>
        </Grid>
        <Grid item md={12} style={{ marginTop: "1vh" }}>
          <Typography>{infoPost?.title}</Typography>
        </Grid>
        <Grid item md={12} style={{ minHeight: "70vh", margin: "2vh 0vh" }}>
          <Interweave content={infoPost?.content} />
        </Grid>
        <Grid item md={12}>
          <Typography
            style={{ marginTop: "0.5vh", fontSize: "10px" }}
            color={"GrayText"}
          >
            By: {infoPost?.author} | {infoPost?.date}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
