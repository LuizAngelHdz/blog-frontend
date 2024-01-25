import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogContent, Grid, Typography } from "@mui/material";
import useApi from "../../hooks/useApi";
import { TablePost } from "./TablePost";
import { FormArticle } from "../../components/FormArticle";

export const AdminPost = () => {
  const [showAdd, setshowAdd] = useState(false);
  const [showEdit, setshowEdit] = useState(false);
  const [initalValues, setinitalValues] = useState({
    title: "",
    author: "",
    content: "",
  });
  const [getList, data] = useApi({
    method: "get",
    endpoint: "/blogs",
  });
  const [createNewPost] = useApi({
    method: "post",
    endpoint: "/blogs",
  });
  const [updatePost] = useApi({
    method: "put",
    endpoint: "/blogs",
  });
  const [deletePost] = useApi({
    method: "delete",
    endpoint: "/blogs",
  });

  useEffect(() => {
    getList();
  }, []);
  const reload = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const updateArticle = (article) => {
    setinitalValues({ ...article });
    setshowEdit(true);
  };

  const createPost = async (values) => {
    await createNewPost({ body: values });
    data.push(values);
    setshowAdd(false);
    reload();
  };
  const uploadPost = async (values) => {
    await updatePost({ body: values, urlParams: values.id });

    setshowEdit(false);
    reload();
  };
  const delteArticle = async (id) => {
    await deletePost({ urlParams: id });
    reload();
  };

  return (
    <Grid container spacing={2}>
      <Grid item md={12} xs={12}>
        <Typography variant="h4">Administrador de articulos</Typography>
      </Grid>
      <Grid item md={12} xs={12}>
        <Button variant="outlined" onClick={() => setshowAdd(true)}>
          Crear Articulo
        </Button>
      </Grid>
      <Grid item md={12} xs={12}>
        <TablePost
          postsList={data}
          updateArticle={(article) => updateArticle(article)}
          delteArticle={(id) => delteArticle(id)}
        />
      </Grid>

      <Dialog
        open={showAdd}
        onClose={() => setshowAdd(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogContent>
          <FormArticle
            initalValues={initalValues}
            onSubmitForm={(values) => createPost(values)}
          />
        </DialogContent>
      </Dialog>
      <Dialog
        open={showEdit}
        onClose={() => setshowEdit(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogContent>
          <FormArticle
            initalValues={initalValues}
            onSubmitForm={(values) => uploadPost(values)}
          />
        </DialogContent>
      </Dialog>
    </Grid>
  );
};
