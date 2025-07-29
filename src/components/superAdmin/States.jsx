import { useState } from "react";
import "../../assets/styles/States.css";
import PageTransitionWrapper from "../PageTransitionWrapper";
import { motion, AnimatePresence } from "framer-motion";
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

export default function States() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
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

  const [paginationStart, setPaginationStart] = useState(1);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goNextPages = () => {
    <PageTransitionWrapper />;
    const nextStart = paginationStart + pagesToShow;
    if (nextStart <= totalPages) {
      setPaginationStart(nextStart);
      setCurrentPage(nextStart);
    }
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
            // <motion.div
            //   className="modal-overlay"
            //   initial={{ opacity: 0 }}
            //   animate={{ opacity: 1 }}
            //   exit={{ opacity: 0 }}
            // >
            //   <motion.div
            //     className="modal-box"
            //     initial={{ scale: 0.8, opacity: 0 }}
            //     animate={{ scale: 1, opacity: 1 }}
            //     exit={{ scale: 0.8, opacity: 0 }}
            //     transition={{ type: "spring", duration: 0.4 }}
            //   >
            //     <span>Add State</span>
            //     <div className="modal-header">
            //       <button className="close-btn" onClick={closeModal}>
            //         &times;
            //       </button>
            //     </div>

            //     <div className="modal-body">
            //       <div
            //         className=" "
            //         style={{
            //           display: "flex",
            //           alignItems: "center",
            //           justifyContent: "space-between",
            //         }}
            //       >
            //         <div className="">
            //           <input type="text" className="form-control" />
            //         </div>
            //         <div className="">
            //           <label>StateCode</label>
            //           <input type="text" className="form-control" />
            //         </div>
            //         <div className="">
            //           <label>AdminName</label>
            //           <input type="text" className="form-control" />
            //         </div>
            //       </div>
            //     </div>

            //     <div className="modal-footer">
            //       <button className="btn btn-secondary" onClick={closeModal}>
            //         Close
            //       </button>
            //     </div>
            //   </motion.div>
            // </motion.div>
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
                  <h5 className="modal-title">Add State</h5>
                  <button
                    className="close-btn btn btn-sm btn-danger"
                    onClick={closeModal}
                  >
                    &times;
                  </button>
                </div>

                <div className="modal-body">
                  <form>
                    <div className="row">
                      <div className="mb-3 col-4">
                        <label className="form-label">State Name</label>
                        <select className="form-select">
                          <option>Select State</option>
                          <option>Andhra Pradesh</option>
                          <option>Telangana</option>
                          <option>Karnataka</option>
                          <option>Maharashtra</option>
                          <option>Tamil Nadu</option>
                          {/* Add more states as needed */}
                        </select>
                      </div>

                      <div className="mb-3 col-4">
                        <label className="form-label">State Code</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter State Code"
                        />
                      </div>
                      <div className="mb-3 col-4">
                        <label className="form-label">Mobile Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Mobile Number"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="mb-3 col-4">
                        <label className="form-label">State Admin Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Admin Name"
                        />
                      </div>

                      <div className="mb-3 col-4">
                        <label className="form-label">Created Date</label>
                        <input type="date" className="form-control" />
                      </div>
                      <div className="mb-3 col-4">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={closeModal}>
                    Close
                  </button>
                  <button className="btn btn-primary">Save</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </PageTransitionWrapper>
    </div>
  );
}
