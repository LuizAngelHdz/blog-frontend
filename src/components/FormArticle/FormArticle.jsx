import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useStyles } from "./styles";

export const FormArticle = ({ initalValues, onSubmitForm }) => {
  const classes = useStyles();
  /* The code snippet is defining a validation schema using the `yup` library. */
  const validationSchema = yup.object({
    title: yup.string("Ingresa una cadena").required("El campo es requerido"),
    author: yup.string("Ingresa una cadena").required("El campo es requerido"),
    content: yup.string("Ingresa una cadena").required("El campo es requerido"),
  });

  /* The code snippet is using the `useFormik` hook from the `formik` library to create a formik
instance. */
  const formik = useFormik({
    initialValues: initalValues,
    validationSchema,
    onSubmit: (values) => onSubmitForm({ ...values, date: createDate() }),
  });

  /**
   * The `createDate` function returns the current date in the format "YYYY-MM-DD".
   * @returns The function `createDate` returns a string in the format "YYYY-MM-DD", representing the
   * current date.
   */
  const createDate = () => {
    var date = new Date();
    var day = date.getDate().toString().padStart(2, "0");
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var year = date.getFullYear().toString();

    return `${year}-${month}-${day}`;
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      autoComplete="off"
      className={classes.form}
    >
      <Grid container spacing={2} className={classes.container}>
        <Grid xs={12} md={12}>
          <Typography variant="h3">Crear post</Typography>
        </Grid>
        <Grid item md={6} xs={6}>
          <TextField
            placeholder="Titulo"
            fullWidth
            label="Titulo"
            value={formik.values?.title}
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
            value={formik.values?.author}
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
            value={formik.values?.content}
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
