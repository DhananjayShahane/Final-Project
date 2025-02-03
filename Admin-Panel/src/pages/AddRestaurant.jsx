import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddRestaurantForm = () => {
  const URL = "http://localhost:4000";
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [activeTab, setActiveTab] = useState("#tabPersonalDetail");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [formData, setFormData] = useState({
    restaurantName: "",
    openingHours: "",
    address: "",
    description: "",
    ownerName: "",
    contactNumber: "",
    emails: "",
    status: "",
    orders: "",
    location: "",
    openingDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setLogo(null);
    setLogoPreview(null);
  };

  const validateForm = () => {
    const {
      restaurantName,
      openingHours,
      address,
      ownerName,
      contactNumber,
      emails,
      status,
      orders,
      location,
      openingDate,
    } = formData;
    if (
      !restaurantName ||
      !openingHours ||
      !address ||
      !ownerName ||
      !contactNumber ||
      !emails ||
      !status ||
      !orders ||
      !location ||
      !openingDate
    ) {
      toast.error("Please fill in all required fields.");
      return false;
    }
    // Additional email validation
    if (!/\S+@\S+\.\S+/.test(emails)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (!logo) {
      toast.error("Please upload a restaurant logo.");
      return;
    }

    const form = new FormData();
    Object.keys(formData).forEach((key) => form.append(key, formData[key]));
    form.append("logo", logo);

    try {
      const response = await axios.post(`${URL}/api/restaurant/add`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        setFormData({
          restaurantName: "",
          openingHours: "",
          address: "",
          description: "",
          ownerName: "",
          contactNumber: "",
          emails: "",
          status: "",
          orders: "",
          location: "",
          openingDate: "",
        });
        setLogo(null);
        setLogoPreview(null);
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
        <h4 className="text-xl font-medium">Add Restaurant</h4>
      </div>

      <form onSubmit={onFormSubmit}>
        {activeTab === "#tabPersonalDetail" && (
          <div className="grid gap-6 xl:grid-cols-3 items-start">
            <div className="rounded-lg border border-default-200 p-3 bg-white">
              <div className="mb-4 flex h-96 flex-col bg-orange-50 items-center border-dashed border-orange-500 justify-center rounded-lg border-2 p-6 relative">
                {logoPreview ? (
                  <>
                    <img
                      src={logoPreview}
                      alt="Logo preview"
                      className="h-full w-auto object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={removeLogo}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      ✖
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      type="file"
                      id="logo"
                      name="logo"
                      onChange={handleLogoChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="logo"
                      className="cursor-pointer bg-orange-400 text-white px-4 py-2 rounded-lg"
                    >
                      Upload Restaurant Logo
                    </label>
                  </>
                )}
              </div>
            </div>

            <div className="xl:col-span-2">
              <div className="space-y-6">
                <div className="rounded-lg border border-default-200 p-6 bg-white">
                  <div className="grid gap-6 lg:grid-cols-2">
                    {/* Form Fields */}
                    {[
                      {
                        name: "restaurantName",
                        type: "text",
                        placeholder: "Restaurant Name",
                      },
                      {
                        name: "openingHours",
                        type: "text",
                        placeholder: "Opening Hours",
                      },
                      { name: "address", type: "text", placeholder: "Address" },
                      {
                        name: "description",
                        type: "textarea",
                        placeholder: "Short Description",
                      },
                      {
                        name: "ownerName",
                        type: "text",
                        placeholder: "Owner Name",
                      },
                      {
                        name: "contactNumber",
                        type: "text",
                        placeholder: "Contact Number",
                      },
                      { name: "emails", type: "email", placeholder: "Email" },
                      { name: "status", type: "text", placeholder: "Status" },
                      { name: "orders", type: "text", placeholder: "Orders" },
                      {
                        name: "location",
                        type: "text",
                        placeholder: "Location",
                      },
                      {
                        name: "openingDate",
                        type: "date",
                        placeholder: "Opening Date",
                      },
                    ].map((field, index) => (
                      <div className="relative max-w-full" key={index}>
                        <label
                          className="mb-2 block text-sm font-medium text-default-900"
                          htmlFor={field.name}
                        >
                          {field.placeholder}
                        </label>
                        {field.type === "textarea" ? (
                          <textarea
                            placeholder={field.placeholder}
                            name={field.name}
                            rows="5"
                            id={field.name}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            className="rounded-lg border-2 border-default-200 focus:outline-2 focus:outline-orange-400 px-4 py-2.5 w-full"
                          />
                        ) : (
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            name={field.name}
                            id={field.name}
                            value={formData[field.name]}
                            onChange={handleInputChange}
                            className="form-input rounded-lg border-2 border-default-200 focus:outline-2 focus:outline-orange-400 px-4 py-2.5 w-full"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-wrap justify-end gap-4 my-5">
          <button
            type="button"
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
      </form>
    </div>
  );
};

export default AddRestaurantForm;
