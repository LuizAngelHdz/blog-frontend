import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import * as yup from "yup";
import useApi from "../../hooks/useApi";

export const CreatePost = () => {
  const [createNewPost, data] = useApi({ method: "post", endpoint: "/blogs" });
  const validationSchema = yup.object({
    title: yup.string("Ingresa una cadena").required("El campo es requerido"),
    author: yup.string("Ingresa una cadena").required("El campo es requerido"),
    content: yup.string("Ingresa una cadena").required("El campo es requerido"),
  });
  const initialValues = {
    title: "",
    author: "",
    content: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const newValues = { ...values, date: createDate() };
      await createNewPost({ body: newValues });
      if (data === "Blog creado correctamente") {
        postCreated();
      }
    },
  });

  const createDate = () => {
    var date = new Date();
    var day = date.getDate().toString().padStart(2, "0");
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var year = date.getFullYear().toString();

    return `${year}-${month}-${day}`;
  };

  const postCreated = () => {
    formik.setValues({ ...initialValues });
    window.location.reload();
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      autoComplete="off"
      style={{ width: "100%" }}
    >
      <Grid container style={{ padding: "5vh" }} spacing={2}>
        <Grid xs={12} md={12}>
          <Typography variant="h3">Crear post</Typography>
        </Grid>
        <Grid item md={6} xs={6}>
          <TextField
            placeholder="Titulo"
            fullWidth
            label="Titulo"
            value={formik.values.title}
            onChange={formik.handleChange}
            id="title"
            name="title"
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            type="text"
          />
        </Grid>
        <Grid item md={6} xs={6}>
          <TextField
            placeholder="Autor"
            fullWidth
            label="Autor"
            value={formik.values.author}
            id="author"
            name="author"
            type="text"
            onChange={formik.handleChange}
            error={formik.touched.author && Boolean(formik.errors.author)}
            helperText={formik.touched.author && formik.errors.author}
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <ReactQuill
            value={formik.values.content}
            theme="snow"
            id="content"
            name="content"
            onChange={(e) => formik.setValues({ ...formik.values, content: e })}
          />
          {formik.errors.content && (
            <Typography color="error">{formik.errors.content}</Typography>
          )}
        </Grid>
        <Grid item>
          <Button type="submit">Enviar</Button>
        </Grid>
      </Grid>
    </form>
  );
};
