import axios from "axios";

// Google Apps Script로 구현한 Google Form API
export const submitContactForm = async (data: FormData) => {
  return axios.post(
    "https://script.google.com/macros/s/AKfycbyeWNQ90Hjbb1Pd7iKaRdHbHY1wVfNO7v_0g_Ky-cK60d6HkKXf1d7If58fPVg9rwp_ZA/exec",
    data,
    { headers: { "Content-Type": "multipart/form-data" } },
  );
};
