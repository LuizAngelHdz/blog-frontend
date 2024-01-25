import React from "react";
import {
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
} from "@mui/material";
import { Delete as DeleteIcon, Edit, Visibility } from "@mui/icons-material/";
import { Interweave } from "interweave";
import { formatString } from "../../utils/formatString";
import { useNavigate } from "react-router-dom";

export const TablePost = ({ postsList, updateArticle, delteArticle }) => {
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Table style={{ minWidth: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Titulo</TableCell>
            <TableCell>Fecha de publicación</TableCell>
            <TableCell>Autor</TableCell>
            <TableCell>Contenido</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {postsList?.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.author}</TableCell>
              <TableCell>
                <Interweave content={formatString(row.content, 70)} />
              </TableCell>
              <TableCell>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Tooltip title="Editar">
                      <IconButton
                        aria-label="edit"
                        onClick={() => updateArticle(row)}
                      >
                        <Edit />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Ver articulo">
                      <IconButton
                        aria-label="Visibility"
                        onClick={() => navigate(`/post/${row.id}`)}
                      >
                        <Visibility />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title="Eliminar">
                      <IconButton
                        aria-label="delete"
                        color="error"
                        onClick={() => delteArticle(row.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
