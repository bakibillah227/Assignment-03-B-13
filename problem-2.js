/* Problem-2 */

function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  }

  if (otp.length === 8 && otp.startsWith("ph-")) {
    return true;
  } else {
    return false;
  }
}

console.log(validOtp(12345678));
