import React from "react";
import "./Add.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import Helmet from 'react-helmet'

function Add() {
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <div className="form">
        <Formik
          initialValues={{
            place: "",
            price: 0,
          }}
          validationSchema={Yup.object({
            place: Yup.string().required("true"),
            price: Yup.number().required("true"),
          })}
          onSubmit={(values, { resetForm }) => {
            axios.post("http://localhost:2222/products", values).then((res) => {
              toast.success("item added");
            });
            resetForm();
          }}
        >
          {({ values, handleSubmit, handleChange, dirty }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="place">Place</label>
              <input
                type="text"
                placeholder="place"
                id="place"
                value={values.place}
                onChange={handleChange}
              />

              <label htmlFor="price">Price</label>
              <input
                type="number"
                placeholder="price"
                id="price"
                value={values.price}
                onChange={handleChange}
              />

              <button type="submit" disabled={!dirty}>
                Add
              </button>
            </form>
          )}
        </Formik>
      </div>
      <Toaster />
    </>
  );
}

export default Add;
