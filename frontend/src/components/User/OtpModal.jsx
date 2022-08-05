import React,{useState} from 'react'
import OTPInput, { ResendOTP } from "otp-input-react";
import "./signupFormStyle.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function OtpModal(props) {

    const [openModal, setOpenModal] = useState(true);
  
const handleCloseModal=()=>{
    setOpenModal(false);
    props.onAction(false)
}

    const [OTP, setOTP] = useState("");

    

  return (
   <>

                <Modal
                  open={openModal}
                  onClose={handleCloseModal}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 400,
                      bgcolor: "background.paper",
                      border: "2px solid #000",
                      boxShadow: 24,
                      p: 4,
                    }}
                  >
                    <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number"  />
      <ResendOTP onResendClick={() => console.log("Resend clicked")} />
                  </Box>
                </Modal>
   </>
  )
}

export default OtpModal
