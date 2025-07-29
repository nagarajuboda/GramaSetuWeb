import { useState, useEffect } from "react";
import "../../assets/styles/Login.css";
import AuthService from "../../service/AuthService";
import { Loginvalidations } from "../formValidation/Loginvalidations";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "bootstrap";
export default function Login() {
  const [phoneNumber, setphoneNumber] = useState({
    phoneNumber: "",
  });
  const [verifyOtpflag, setVerifyOtpflag] = useState(false);
  const [showResend, setShowResend] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [otp, setotp] = useState({
    otp: "",
  });
  const [phoneNumbererror, setphoneNumbererror] = useState({
    phoneNumber: "",
  });
  const navigate = useNavigate();
  const getOTP = async () => {
    const newErrors = {
      phoneNumber: Loginvalidations("phoneNumber", phoneNumber.phoneNumber),
    };
    setphoneNumbererror(newErrors);
    const isValid = Object.values(newErrors).every((error) => error === "");
    setResendTimer(30);
    setShowResend(false);
    if (isValid) {
      var obj = {
        phoneNumber: phoneNumber.phoneNumber,
      };
      var result = await AuthService.FcnLogin(obj);

      if (result.isSuccess) {
        setVerifyOtpflag(true);
        toast.success("OTP Verified Successfully done.", {
          position: "top-right",
          autoClose: 4000,
        });
      }
      {
        toast.error(result.error.message, {
          position: "top-right",
          autoClose: 4000,
        });
      }
    }
  };

  const GetPhoneNumberOnchange = (e) => {
    const { name, value } = e.target;
    setphoneNumber({
      ...phoneNumber,
      [name]: value,
    });

    setphoneNumbererror({
      ...phoneNumbererror,
      [name]: Loginvalidations(name, value),
    });
  };
  const handleResendOTP = () => {
    getOTP();
  };
  const verifyOTP = async () => {
    var obj = {
      otp: otp.otp,
      phoneNumber: phoneNumber.phoneNumber,
    };
    var result = await AuthService.FcnVerifyOtp(obj);
    console.log(result);
    if (result.isSuccess) {
      debugger;
      localStorage.setItem("userData", JSON.stringify(result.item));
      if (result.item.result.role.roleName === "Super_Admin") {
        navigate("/dashboard/SuperAdminDashboard");
      } else {
        navigate("/dashboard/StateAdminDashboard");
      }
    }
  };
  useEffect(() => {
    let interval;

    if (verifyOtpflag && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            setShowResend(true);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [verifyOtpflag]);

  const getOtpOnchange = async (e) => {
    const { name, value } = e.target;
    setotp({
      ...otp,
      [name]: value,
    });
  };
  return (
    <div className="background_image">
      <div className="login_main_page">
        {/* {verifyOtpflag === false ? (
          <div className="login_welcome_content">
            <p style={{ fontSize: "20px", color: "#8FBC8F" }}>
              Login via OTP sent to your mobile number.
            </p>
          </div>
        ) : (
          <div className="login_welcome_content">
            <p style={{ fontSize: "20px", color: "#8FBC8F" }}>
              Verify the OTP to complete your login.
            </p>
          </div>
        )} */}

        {verifyOtpflag == false && (
          <form>
            <div className="login_form pt-3 card">
              <div className="login_welcome_content">
                <p style={{ fontSize: "20px", color: "white" }}>
                  Login with Mobile OTP
                </p>
              </div>
              <div>
                <label className="getotp_labe">
                  Mobile Number{" "}
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </span>
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Please enter mobile numner"
                  className="form-control mobileNumberInput w-100"
                  onChange={GetPhoneNumberOnchange}
                  disabled={verifyOtpflag}
                />
                {phoneNumbererror.phoneNumber && (
                  <span className=" ms-1 " style={{ color: "red" }}>
                    {phoneNumbererror.phoneNumber}
                  </span>
                )}
                <button
                  type="button"
                  style={{ width: "100%" }}
                  className="btn btn-success mt-4 "
                  onClick={getOTP}
                  disabled={verifyOtpflag}
                >
                  GetOTP
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="mt-4"
              >
                <span style={{ color: "white" }}>Don't have an Account?</span>{" "}
                <a href="">Register here</a>
              </div>
            </div>
          </form>
        )}
        {/* OTP Verification Form */}
        {verifyOtpflag && (
          <form>
            <div className="login_form pt-3">
              <div className="login_welcome_content">
                <p style={{ fontSize: "20px", color: "white" }}>
                  Verify Your OTP
                </p>
              </div>
              <div>
                <label htmlFor="otp" className="getotp_labe">
                  Verify OTP
                </label>
                <input
                  type="text"
                  name="otp"
                  placeholder="Please enter OTP"
                  className="form-control mobileNumberInput w-100"
                  onChange={getOtpOnchange}
                />
                <button
                  type="button"
                  style={{ width: "100%" }}
                  className="btn btn-primary mt-3"
                  onClick={verifyOTP}
                >
                  Verify OTP
                </button>

                {!showResend ? (
                  <p className="text-center mt-3" style={{ color: "gray" }}>
                    Resend OTP in <strong>{resendTimer}</strong> seconds
                  </p>
                ) : (
                  <p className="text-center mt-3">
                    <button
                      type="button"
                      className="btn btn-link p-0"
                      onClick={handleResendOTP}
                    >
                      🔁 Resend OTP
                    </button>
                  </p>
                )}
              </div>
            </div>
          </form>
        )}
        {/* {verifyOtpflag === true && (
          <form>
            <div className="login_form pt-3">
              <div>
                <label htmlFor="Mobile Number" className="getotp_labe">
                  Verify OTP
                </label>
                <input
                  type="text"
                  name="otp"
                  placeholder="Please enter otp."
                  className="form-control mobileNumberInput w-100"
                  onChange={getOtpOnchange}
                />
                {phoneNumbererror.phoneNumber && (
                  <span className="ms-1" style={{ color: "red" }}>
                    {phoneNumbererror.phoneNumber}
                  </span>
                )}
                <button
                  type="button"
                  style={{ width: "100%" }}
                  className="btn btn-success mt-3"
                  onClick={getOTP}
                >
                  Verify
                </button>
              </div>
            </div>
          </form>
        )} */}
      </div>
      <ToastContainer position="top-end" autoClose={5000} />
    </div>
  );
}
