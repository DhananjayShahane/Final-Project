import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddCategories = () => {
  const URL = "http://localhost:4000";
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Category name is required"),
    image: Yup.mixed().required("Image is required"),
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleClear = (resetForm) => {
    resetForm();
    removeImage();
  };

  const onFormSubmit = async (values, { resetForm }) => {
    if (!image) {
      toast.error("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("image", image);

    try {
      const response = await axios.post(`${URL}/api/category/add`, formData);
      if (response.data.success) {
        resetForm();
        setImage(null);
        setImagePreview(null);
        toast.success(response.data.message);
      } else {
        toast.warning(response.data.message);
      }
    } catch (error) {
      toast.error("Error submitting form");
    }
  };

  return (
    <div className="page-content space-y-6">
      <div className="flex w-full items-center justify-between">
        <h4 className="text-xl font-medium">Add Category</h4>
      </div>
      <Formik
        initialValues={{
          name: "",
          image: null,
        }}
        validationSchema={validationSchema}
        onSubmit={onFormSubmit}
      >
        {({ setFieldValue, resetForm }) => (
          <Form className="grid gap-6 xl:grid-cols-3 items-start">
            <div className="rounded-lg border border-default-200 p-3 bg-white">
              <div className="mb-4 flex h-96 flex-col bg-orange-50 items-center border-dashed border-orange-500 justify-center rounded-lg border-2 p-6 relative">
                {imagePreview ? (
                  <>
                    <img
                      src={imagePreview}
                      alt="Category preview"
                      className="h-full w-auto object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      ✖
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={(event) => {
                        handleImageChange(event);
                        setFieldValue("image", event.currentTarget.files[0]);
                      }}
                      className="hidden"
                    />
                    <label
                      htmlFor="image"
                      className="cursor-pointer bg-orange-400 text-white px-4 py-2 rounded-lg"
                    >
                      Upload Category Image
                    </label>
                  </>
                )}
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-red-500 text-sm absolute bottom-2"
                />
              </div>
            </div>

            <div className="xl:col-span-2">
              <div className="space-y-6">
                <div className="rounded-lg border border-default-200 p-6 bg-white">
                  <div className="space-y-6">
                    <div className="relative max-w-full">
                      <label
                        className="mb-2 block text-sm font-medium text-default-900"
                        htmlFor="name"
                      >
                        Category Name
                      </label>
                      <Field
                        type="text"
                        placeholder="Category Name"
                        name="name"
                        id="name"
                        className="form-input rounded-lg border-2 border-default-200 focus:outline-2 focus:outline-orange-400 px-4 py-2.5 w-full"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => handleClear(resetForm)}
                    className="flex items-center justify-center gap-2 rounded-lg bg-red-500/10 px-6 py-2.5 text-center text-sm font-semibold text-red-500 shadow-sm transition-colors duration-200 hover:bg-red-500 hover:text-white"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"></path>
                      <path d="M22 21H7"></path>
                      <path d="m5 11 9 9"></path>
                    </svg>
                    Clear
                  </button>
                  <button
                    type="submit"
                    className="bg-orange-400 text-white px-6 py-2 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddCategories;
