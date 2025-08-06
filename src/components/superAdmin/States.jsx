import { useEffect, useState } from "react";
import "../../assets/styles/States.css";
import PageTransitionWrapper from "../PageTransitionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import SuperAdminService from "../../service/SuperAdminService";
const dummyData = [
  {
    stateCode: "TS01",
    stateName: "Telangana",
    adminName: "Ravi Kumar",
    contact: "9876543210",
    email: "ravi.ts@example.com",
    joined: "2023-01-12",
  },
  {
    stateCode: "AP02",
    stateName: "Andhra Pradesh",
    adminName: "Suma Reddy",
    contact: "9123456780",
    email: "suma.ap@example.com",
    joined: "2023-03-22",
  },
  {
    stateCode: "MH03",
    stateName: "Maharashtra",
    adminName: "Ajay Patil",
    contact: "9988776655",
    email: "ajay.mh@example.com",
    joined: "2023-05-01",
  },
  {
    stateCode: "KA04",
    stateName: "Karnataka",
    adminName: "Divya Shetty",
    contact: "9876501234",
    email: "divya.ka@example.com",
    joined: "2023-07-18",
  },
  {
    stateCode: "TN05",
    stateName: "Tamil Nadu",
    adminName: "Ramesh Iyer",
    contact: "9090909090",
    email: "ramesh.tn@example.com",
    joined: "2023-08-05",
  },
  {
    stateCode: "TS01",
    stateName: "Telangana",
    adminName: "Ravi Kumar",
    contact: "9876543210",
    email: "ravi.ts@example.com",
    joined: "2023-01-12",
  },
  {
    stateCode: "AP02",
    stateName: "Andhra Pradesh",
    adminName: "Suma Reddy",
    contact: "9123456780",
    email: "suma.ap@example.com",
    joined: "2023-03-22",
  },
  {
    stateCode: "MH03",
    stateName: "Maharashtra",
    adminName: "Ajay Patil",
    contact: "9988776655",
    email: "ajay.mh@example.com",
    joined: "2023-05-01",
  },
  {
    stateCode: "KA04",
    stateName: "Karnataka",
    adminName: "Divya Shetty",
    contact: "9876501234",
    email: "divya.ka@example.com",
    joined: "2023-07-18",
  },
  {
    stateCode: "TN05",
    stateName: "Tamil Nadu",
    adminName: "Ramesh Iyer",
    contact: "9090909090",
    email: "ramesh.tn@example.com",
    joined: "2023-08-05",
  },
  {
    stateCode: "TS01",
    stateName: "Telangana",
    adminName: "Ravi Kumar",
    contact: "9876543210",
    email: "ravi.ts@example.com",
    joined: "2023-01-12",
  },
  {
    stateCode: "AP02",
    stateName: "Andhra Pradesh",
    adminName: "Suma Reddy",
    contact: "9123456780",
    email: "suma.ap@example.com",
    joined: "2023-03-22",
  },
  {
    stateCode: "MH03",
    stateName: "Maharashtra",
    adminName: "Ajay Patil",
    contact: "9988776655",
    email: "ajay.mh@example.com",
    joined: "2023-05-01",
  },
  {
    stateCode: "KA04",
    stateName: "Karnataka",
    adminName: "Divya Shetty",
    contact: "9876501234",
    email: "divya.ka@example.com",
    joined: "2023-07-18",
  },
  {
    stateCode: "TN05",
    stateName: "Tamil Nadu",
    adminName: "Ramesh Iyer",
    contact: "9090909090",
    email: "ramesh.tn@example.com",
    joined: "2023-08-05",
  },
  {
    stateCode: "TS01",
    stateName: "Telangana",
    adminName: "Ravi Kumar",
    contact: "9876543210",
    email: "ravi.ts@example.com",
    joined: "2023-01-12",
  },
  {
    stateCode: "AP02",
    stateName: "Andhra Pradesh",
    adminName: "Suma Reddy",
    contact: "9123456780",
    email: "suma.ap@example.com",
    joined: "2023-03-22",
  },
  {
    stateCode: "MH03",
    stateName: "Maharashtra",
    adminName: "Ajay Patil",
    contact: "9988776655",
    email: "ajay.mh@example.com",
    joined: "2023-05-01",
  },
  {
    stateCode: "KA04",
    stateName: "Karnataka",
    adminName: "Divya Shetty",
    contact: "9876501234",
    email: "divya.ka@example.com",
    joined: "2023-07-18",
  },
  {
    stateCode: "TN05",
    stateName: "Tamil Nadu",
    adminName: "Ramesh Iyer",
    contact: "9090909090",
    email: "ramesh.tn@example.com",
    joined: "2023-08-05",
  },
  {
    stateCode: "TS01",
    stateName: "Telangana",
    adminName: "Ravi Kumar",
    contact: "9876543210",
    email: "ravi.ts@example.com",
    joined: "2023-01-12",
  },
  {
    stateCode: "AP02",
    stateName: "Andhra Pradesh",
    adminName: "Suma Reddy",
    contact: "9123456780",
    email: "suma.ap@example.com",
    joined: "2023-03-22",
  },
  {
    stateCode: "MH03",
    stateName: "Maharashtra",
    adminName: "Ajay Patil",
    contact: "9988776655",
    email: "ajay.mh@example.com",
    joined: "2023-05-01",
  },
  {
    stateCode: "KA04",
    stateName: "Karnataka",
    adminName: "Divya Shetty",
    contact: "9876501234",
    email: "divya.ka@example.com",
    joined: "2023-07-18",
  },
  {
    stateCode: "TN05",
    stateName: "Tamil Nadu",
    adminName: "Ramesh Iyer",
    contact: "9090909090",
    email: "ramesh.tn@example.com",
    joined: "2023-08-05",
  },
  {
    stateCode: "TS01",
    stateName: "Telangana",
    adminName: "Ravi Kumar",
    contact: "9876543210",
    email: "ravi.ts@example.com",
    joined: "2023-01-12",
  },
  {
    stateCode: "AP02",
    stateName: "Andhra Pradesh",
    adminName: "Suma Reddy",
    contact: "9123456780",
    email: "suma.ap@example.com",
    joined: "2023-03-22",
  },
  {
    stateCode: "MH03",
    stateName: "Maharashtra",
    adminName: "Ajay Patil",
    contact: "9988776655",
    email: "ajay.mh@example.com",
    joined: "2023-05-01",
  },
  {
    stateCode: "KA04",
    stateName: "Karnataka",
    adminName: "Divya Shetty",
    contact: "9876501234",
    email: "divya.ka@example.com",
    joined: "2023-07-18",
  },
  {
    stateCode: "TN05",
    stateName: "Tamil Nadu",
    adminName: "Ramesh Iyer",
    contact: "9090909090",
    email: "ramesh.tn@example.com",
    joined: "2023-08-05",
  },

  {
    stateCode: "TS01",
    stateName: "Telangana",
    adminName: "Ravi Kumar",
    contact: "9876543210",
    email: "ravi.ts@example.com",
    joined: "2023-01-12",
  },
  {
    stateCode: "AP02",
    stateName: "Andhra Pradesh",
    adminName: "Suma Reddy",
    contact: "9123456780",
    email: "suma.ap@example.com",
    joined: "2023-03-22",
  },
  {
    stateCode: "MH03",
    stateName: "Maharashtra",
    adminName: "Ajay Patil",
    contact: "9988776655",
    email: "ajay.mh@example.com",
    joined: "2023-05-01",
  },
  {
    stateCode: "KA04",
    stateName: "Karnataka",
    adminName: "Divya Shetty",
    contact: "9876501234",
    email: "divya.ka@example.com",
    joined: "2023-07-18",
  },
  {
    stateCode: "TN05",
    stateName: "Tamil Nadu",
    adminName: "Ramesh Iyer",
    contact: "9090909090",
    email: "ramesh.tn@example.com",
    joined: "2023-08-05",
  },
];
import { Upload } from "lucide-react";
import { AddStateValidation } from "../formValidation/AddStateValidation";
import { useTranslation } from "react-i18next";
import { changeLanguageByState } from "../../utils/languageHelper";
export default function States() {
  const { t } = useTranslation();
  const [selectedState, setSelectedState] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [selectedStateCode, setSelectedStateCode] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [base64File, setBase64File] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [states, setStates] = useState([]);
  const rowsPerPage = 10;
  const pagesToShow = 2;

  const filteredData = dummyData.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
  const [formData, setFormData] = useState({});
  const [ststeCodedisible, setststeCodedisible] = useState(false);
  const [paginationStart, setPaginationStart] = useState(1);
  const [values, setValues] = useState({
    stateName: "",
    stateCode: "",
    isActive: "",
    StateAdminName: "",
    phoneNumer: "",
    email: "",
    gender: "",
    pincode: "",
    language: "",
    id: "",
  });
  const [errors, setErrors] = useState({
    stateName: "",
    stateCode: "",
    isActive: "",
    StateAdminName: "",
    phoneNumer: "",
    gender: "",
    pincode: "",
    language: "",
  });
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    FetchData();
  }, []);
  const FetchData = async () => {
    var response = await SuperAdminService.GetAllStates();
    setStates(response.item);
  };
  const inputOnChange1 = (e) => {
    debugger;
    setSelectedState(e.target.value);
  };

  const goNextPages = () => {
    <PageTransitionWrapper />;
    const nextStart = paginationStart + pagesToShow;
    if (nextStart <= totalPages) {
      setPaginationStart(nextStart);
      setCurrentPage(nextStart);
    }
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setValues({});
  };
  const goPrevPages = () => {
    const prevStart = paginationStart - pagesToShow;
    if (prevStart >= 1) {
      setPaginationStart(prevStart);
      setCurrentPage(prevStart);
    }
  };

  const visiblePages = Array.from(
    { length: pagesToShow },
    (_, i) => paginationStart + i
  ).filter((page) => page <= totalPages);
  const inputOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "stateName") {
      const selectedStateObj = states.find((s) => s.stateCode === value);
      const selectedStateName = selectedStateObj?.stateName || "";
      const stateid = selectedStateObj?.id || "";
      setSelectedStateCode(value);
      setststeCodedisible(true);
      setValues({
        ...values,
        stateName: selectedStateName,
        stateCode: value,
        id: stateid,
      });
      if (selectedStateName) {
        changeLanguageByState(selectedStateName);
      }
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
    setErrors({
      ...errors,
      [name]: AddStateValidation(name, value),
    });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result.split(",")[1]; // Remove `data:image/png;base64,`
      setFormData({
        ...formData,
        stateLogoBase64: base64,
        stateLogoFileName: file.name,
      });
    };
    reader.readAsDataURL(file);
  };
  const SaveStateForm = () => {
    const newErrors = {
      stateName: AddStateValidation("stateName", values.stateName),

      StateAdminName: AddStateValidation(
        "StateAdminName",
        values.StateAdminName
      ),
      phoneNumer: AddStateValidation("phoneNumer", values.phoneNumer),
      isActive: AddStateValidation("isActive", values.isActive),
      gender: AddStateValidation("gender", values.gender),
      pincode: AddStateValidation("pincode", values.pincode),
      language: AddStateValidation("language", values.language),
    };
    setErrors(newErrors);
    const isValid = Object.values(newErrors).every((error) => error === "");
    if (isValid) {
      const requestData = {
        state: {
          stateName: values.stateName,
          stateCode: values.stateCode,
          isActive: true,
          stateLogoBase64: formData.stateLogoBase64,
          stateLogoFileName: formData.stateLogoFileName,
          id: values.id,
        },
        user: {
          fullName: values.StateAdminName,
          phoneNumber: values.phoneNumer,
          email: values.email,
          gender: values.gender,
          pinCode: values.pincode,
          languagePreference: values.language,
          Address: "",
          VillageName: "",
          PasswordHash: "",
          AadhaarNumber: "",
          stateId: values.id,
        },
      };
      var result = SuperAdminService.AddState(requestData);
    }
  };

  return (
    <div>
      <h2 className="state_header">All States</h2>
      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <input
          type="text"
          placeholder="Search "
          className="form-control mb-3 w-25"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
            setPaginationStart(1);
          }}
        />
        <button type="submit" className="add_button" onClick={openModal}>
          Add
        </button>
      </div>
      <PageTransitionWrapper key={currentPage}>
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>State Code</th>
              <th>State Name</th>
              <th>State Admin Name</th>
              <th>Contact Number</th>
              <th>Email ID</th>
              <th>Joined Date</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.length > 0 ? (
              currentRows.map((item, index) => (
                <tr key={index} className="row_data">
                  <td style={{ padding: "10px" }}>{item.stateCode}</td>
                  <td style={{ padding: "10px" }}>{item.stateName}</td>
                  <td style={{ padding: "10px" }}>{item.adminName}</td>
                  <td style={{ padding: "10px" }}>{item.contact}</td>
                  <td style={{ padding: "10px" }}>{item.email}</td>
                  <td style={{ padding: "10px" }}>{item.joined}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No matching data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="pagination-controls mt-3 d-flex justify-content-end align-items-center">
          <button
            className="btn btn-sm btn-outline-secondary mx-1"
            onClick={goPrevPages}
            disabled={paginationStart === 1}
          >
            Prev
          </button>

          {visiblePages.map((page) => (
            <button
              key={page}
              className={`btn btn-sm mx-1 ${
                currentPage === page ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          ))}

          <button
            className="btn btn-sm btn-outline-secondary mx-1"
            onClick={goNextPages}
            disabled={paginationStart + pagesToShow > totalPages}
          >
            Next
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <div>
              <PageTransitionWrapper>
                <motion.div
                  className="modal-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="modal-box"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ type: "spring", duration: 0.4 }}
                  >
                    <div className="modal-header d-flex align-items-center justify-content-between align-items-center">
                      <span></span>
                      <h5 className="modal-title">Add State</h5>
                      {/* <button className="" onClick={closeModal}>
                    &times;
                  </button> */}
                      <i
                        className="bi bi-x-lg close_icon me-2"
                        onClick={closeModal}
                      ></i>
                    </div>

                    <div className="modal-body">
                      <div className="row form_row">
                        <div className="floating-label-select col-4">
                          <select
                            name="stateName"
                            value={selectedStateCode} // stores stateCode
                            onChange={inputOnChange}
                            required
                          >
                            <option value="">Please select State</option>
                            {states.map((state) => (
                              <option
                                key={state.stateCode}
                                value={state.stateCode}
                              >
                                {t(state.stateName)}
                              </option>
                            ))}
                          </select>
                          <label>Select State*</label>
                          {errors.stateCode && (
                            <span
                              className="error ms-1"
                              style={{ fontSize: "12px", color: "red" }}
                            >
                              {errors.stateCode}
                            </span>
                          )}
                        </div>
                        <div className="floating-label-input col-4">
                          <input
                            type="tel"
                            id=""
                            name="stateCode"
                            placeholder=" "
                            onChange={inputOnChange}
                            value={selectedStateCode}
                            disabled={ststeCodedisible}
                          />
                          <label>StateCode</label>
                        </div>
                        <div className="floating-label-input col-4">
                          <input
                            type="tel"
                            id=""
                            name="StateAdminName"
                            placeholder=""
                            onChange={inputOnChange}
                          />

                          <label>State Admin Name</label>
                          {errors.StateAdminName && (
                            <span
                              className="error ms-1"
                              style={{ fontSize: "12px", color: "red" }}
                            >
                              {errors.StateAdminName}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col-8">
                          <div className="row form_row">
                            <div className="floating-label-select col-6">
                              <select
                                id="state"
                                name="isActive"
                                onChange={inputOnChange}
                                required
                              >
                                <option value="">Select Status</option>
                                <option key="Active" value="Active">
                                  Active
                                </option>
                                <option key="Inactive" value="Inactive">
                                  Inactive
                                </option>
                              </select>

                              <label>Status*</label>
                              {errors.isActive && (
                                <span
                                  className="error ms-1"
                                  style={{ fontSize: "12px", color: "red" }}
                                >
                                  {errors.isActive}
                                </span>
                              )}
                            </div>

                            <div className="floating-label-input col-6">
                              <input
                                type="tel"
                                onChange={inputOnChange}
                                name="email"
                                placeholder=" "
                              />
                              <label>Email*</label>
                            </div>
                          </div>
                          <div className=" row form_row">
                            <div className="floating-label-input col-6">
                              <input
                                onChange={inputOnChange}
                                type="tel"
                                name="phoneNumer"
                              />

                              <label>MobileNumber</label>
                              {errors.phoneNumer && (
                                <span
                                  className="error ms-1"
                                  style={{ fontSize: "12px", color: "red" }}
                                >
                                  {errors.phoneNumer}
                                </span>
                              )}
                            </div>
                            <div className="floating-label-select col-6">
                              <select
                                name="language"
                                onChange={inputOnChange}
                                required
                              >
                                <option value="">Please select language</option>
                                <option value="hi">Hindi</option>
                                <option value="en">English</option>
                                <option value="te">Telugu</option>
                              </select>

                              <label>Language*</label>
                              {errors.language && (
                                <span
                                  className="error ms-1"
                                  style={{ fontSize: "12px", color: "red" }}
                                >
                                  {errors.language}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div
                            className="upload-box"
                            style={{ cursor: "pointer" }}
                          >
                            <label
                              className="upload-label"
                              htmlFor="state-logo-upload"
                            >
                              <Upload className="upload-icon" />
                              <span>UPLOAD STATE LOGO</span>
                            </label>
                            <input
                              type="file"
                              id="state-logo-upload"
                              accept="image/*"
                              hidden
                              style={{ cursor: "pointer" }}
                              onChange={handleFileChange}
                            />
                            {/* <label className="upload-label">
                              <Upload className="upload-icon" />
                              <span>UPLOAD STATE LOGO</span>
                            </label>
                            <input
                              type="file"
                              id="state-logo-upload"
                              hidden
                              style={{ cursor: "pointer" }}
                            /> */}
                            {/* <label
                              className="upload-label"
                              htmlFor="state-logo-upload"
                              style={{ cursor: "pointer" }}
                            >
                              <Upload
                                className="upload-icon"
                                style={{ cursor: "pointer" }}
                              />
                              <span style={{ cursor: "pointer" }}>
                                UPLOAD STATE LOGO
                              </span>
                            </label>
                            <input
                              type="file"
                              id="state-logo-upload"
                              onChange={handleFileChange}
                              style={{ cursor: "pointer" }}
                            /> */}
                          </div>
                        </div>
                      </div>
                      <div className="row form_row">
                        <div className="floating-label-select col-4">
                          <select
                            name="gender"
                            onChange={inputOnChange}
                            required
                          >
                            <option value="">Please select Gender</option>
                            <option key="Male" value="Male">
                              Male
                            </option>
                            <option key="Female" value="Female">
                              Female
                            </option>
                            <option key="Others" value="Others">
                              Others
                            </option>
                          </select>

                          <label>Gender*</label>
                          {errors.gender && (
                            <span
                              className="error ms-1"
                              style={{ fontSize: "12px", color: "red" }}
                            >
                              {errors.gender}
                            </span>
                          )}
                        </div>

                        <div className="floating-label-input col-4">
                          <input
                            type="tel"
                            id=""
                            name="pincode"
                            placeholder=""
                            onChange={inputOnChange}
                          />
                          <label>PinCode*</label>
                          {errors.pincode && (
                            <span
                              className="error ms-1"
                              style={{ fontSize: "12px", color: "red" }}
                            >
                              {errors.pincode}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <div className="">
                        <div
                          className=""
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "end",
                          }}
                        >
                          <button
                            className="me-3 cancel_button"
                            style={{ color: "" }}
                            onClick={closeModal}
                          >
                            Cancel
                          </button>
                          <button
                            className="add_button me-3"
                            onClick={SaveStateForm}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </PageTransitionWrapper>
              {showOtpModal && (
                <div className="modal show d-block" tabIndex="-1">
                  <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Verify OTP</h5>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={() => setShowOtpModal(false)}
                        ></button>
                      </div>
                      <div className="modal-body">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                      </div>
                      <div className="modal-footer">
                        <button
                          className="btn btn-secondary"
                          onClick={() => setShowOtpModal(false)}
                        >
                          Cancel
                        </button>
                        <button
                          className="btn btn-primary"
                          onClick={handleVerifyOtp}
                        >
                          Verify
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </AnimatePresence>
      </PageTransitionWrapper>
    </div>
  );
}
