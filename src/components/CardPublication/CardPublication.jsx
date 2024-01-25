import { Card, Typography, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

import React from "react";
import { Interweave } from "interweave";
import { formatString } from "../../utils/formatString";

export const CardPublication = ({ publication }) => {
  const { title, author, date, content, id } = publication;
  const navigate = useNavigate();
  const newContent = formatString(content);

  return (
    <>
      <Card
        style={{ borderRadius: "5px", cursor: "pointer" }}
        onClick={() => navigate(`/post/${id}`)}
      >
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography
            style={{ marginTop: "0.5vh", fontSize: "10px" }}
            color={"GrayText"}
          >
            By: {author} | {date}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            align="justify"
            style={{ marginTop: "1vh" }}
          >
            <Interweave content={newContent} />
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
