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
  /* The code `const [getList, data] = useApi({ method: "get", endpoint: "/blogs" });` is using the
`useApi` hook to create a function called `getList` and a variable called `data`. */
  const [getList, data] = useApi({
    method: "get",
    endpoint: "/blogs",
  });
  /* The code `const [createNewPost] = useApi({ method: "post", endpoint: "/blogs" });` is using the
`useApi` hook to create a function called `createNewPost`. This function is used to make a POST
request to the "/blogs" endpoint. It is a convenient way to handle API requests for creating a new
blog post. */
  const [createNewPost] = useApi({
    method: "post",
    endpoint: "/blogs",
  });
  /* The code `const [updatePost] = useApi({ method: "put", endpoint: "/blogs" });` is using the `useApi`
hook to create a function called `updatePost`. This function is used to make a PUT request to the
"/blogs" endpoint. It is a convenient way to handle API requests for updating a blog post. */
  const [updatePost] = useApi({
    method: "put",
    endpoint: "/blogs",
  });
  /* The code `const [deletePost] = useApi({ method: "delete", endpoint: "/blogs" });` is using the
`useApi` hook to create a function called `deletePost`. This function is used to make a DELETE
request to the "/blogs" endpoint. It is a convenient way to handle API requests for deleting a blog
post. */
  const [deletePost] = useApi({
    method: "delete",
    endpoint: "/blogs",
  });

  useEffect(() => {
    getList();
  }, []);

  /**
   * The `reload` function reloads the current page after a delay of 1 second.
   */
  const reload = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  /**
   * The function `updateArticle` updates the state with the values of the given article and sets the
   * `showEdit` state to true.
   */
  const updateArticle = (article) => {
    setinitalValues({ ...article });
    setshowEdit(true);
  };

  /**
   * The function `createPost` creates a new post, adds it to the `data` array, hides the add post form,
   * and reloads the page.
   */
  const createPost = async (values) => {
    await createNewPost({ body: values });
    data.push(values);
    setshowAdd(false);
    reload();
  };
  /**
   * The function `uploadPost` updates a post with new values, hides the edit form, and reloads the page.
   */
  const uploadPost = async (values) => {
    await updatePost({ body: values, urlParams: values.id });

    setshowEdit(false);
    reload();
  };
  /**
   * The `deleteArticle` function is an asynchronous function that deletes an article by calling the
   * `deletePost` function with the specified `id` as a URL parameter, and then reloads the page.
   */
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
