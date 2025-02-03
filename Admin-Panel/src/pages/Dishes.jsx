import React, { useState , useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { StoreContext } from "../context/StoreContext";
const RestaurantDishForm = () => {

  const {categoriesList, URL} = useContext(StoreContext);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);


  const validationSchema = Yup.object({
    name: Yup.string().required("Dish name is required"),
    category: Yup.string().required("Category is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive"),
    description: Yup.string().required("Description is required"),
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

  const onFormSubmit = async (values, { resetForm }) => {
    if (!image) {
      toast.error("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("price", Number(values.price));
    formData.append("category", values.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${URL}/api/food/add`, formData);
      if (response.data.success) {
        resetForm();
        setImage(null);
        setImagePreview(null);
        toast.success(response.data.message);
      } else {
        console.error("Submission failed:", response.data.message);
        toast.warning(response.data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form");
    }
  };

  return (
    <div className="page-content space-y-6">
      <div className="flex w-full items-center justify-between">
        <h4 className="text-xl font-medium">Add Dish</h4>
      </div>
      <Formik
        initialValues={{
          name: "",
          category: "",
          price: "",
          description: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onFormSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="grid gap-6 xl:grid-cols-3 items-start">
            <div className="rounded-lg border border-default-200 p-3 bg-white">
              <div className="mb-4 flex h-96 flex-col bg-orange-50 items-center border-dashed border-orange-500 justify-center rounded-lg border-2 p-6 relative">
                {imagePreview ? (
                  <>
                    <img
                      src={imagePreview}
                      alt="Main preview"
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
                      Upload Main Image
                    </label>
                  </>
                )}
              </div>
            </div>

            <div className="xl:col-span-2">
              <div className="space-y-6">
                <div className="rounded-lg border border-default-200 p-6 bg-white">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="space-y-6">
                      <div className="relative max-w-full">
                        <label
                          className="mb-2 block text-sm font-medium text-default-900"
                          htmlFor="name"
                        >
                          Dish Name
                        </label>
                        <Field
                          type="text"
                          placeholder="Dish Name"
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

                      <div className="relative max-w-full">
                        <label
                          className="mb-2 block text-sm font-medium text-default-900"
                          htmlFor="category"
                        >
                          Category
                        </label>
                        <Field
                          as="select"
                          name="category"
                          id="category"
                          className="form-input rounded-lg border-2 border-default-200 focus:outline-2 focus:outline-orange-400 px-4 py-2.5 w-full"
                        >
                          <option value="">Select Category</option>
                          {categoriesList.map((category) => (
                            <option key={category.id} value={category.name}>
                              {category.name}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage
                          name="category"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <div className="relative max-w-full">
                        <label
                          className="mb-2 block text-sm font-medium text-default-900"
                          htmlFor="price"
                        >
                          Price
                        </label>
                        <Field
                          type="number"
                          placeholder="Price"
                          name="price"
                          id="price"
                          className="form-input rounded-lg border-2 border-default-200 focus:outline-2 focus:outline-orange-400 px-4 py-2.5 w-full"
                        />
                        <ErrorMessage
                          name="price"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                    <div className="relative max-w-full">
                      <label
                        className="mb-2 block text-sm font-medium text-default-900"
                        htmlFor="description"
                      >
                        Description
                      </label>
                      <Field
                        as="textarea"
                        placeholder="Short Description"
                        name="description"
                        rows="5"
                        id="description"
                        className="rounded-lg border-2 border-default-200 focus:outline-2 focus:outline-orange-400 px-4 py-2.5 w-full"
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
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

export default RestaurantDishForm;
