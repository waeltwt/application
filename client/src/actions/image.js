import axios from "axios";
export const FindAll = async (setImages) => {
  axios
    .get("/api/post")
    .then((res) => {
        setImages(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// export const Add = async (formData, setImages, setErrors) => {
//   axios
//     .post("/api/post", formData)
//     .then((res) => {
//       setImages(res.data);
//       setErrors({});
//     })
//     .catch((err) => {
//       setErrors(err.response.data);
//     });
// };

// export const Delete = async (id, setImages) => {
//   if (window.confirm("do you want to delete this image?")) {
//     axios
//       .delete(`/api/post/${id}`)
//       .then((res) => {
//         setImages(res.data);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }
// };