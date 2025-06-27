import { React } from "react";
import { useFormik } from "formik";
import "./CommentForm.css"; // Import external CSS

function CommentForm({ addNewComment }) {
  // Validation function for form fields
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length < 3) {
      errors.username = "Must be at least 3 characters";
    }

    if (!values.remarks) {
      errors.remarks = "Required";
    } else if (values.remarks.length < 10) {
      errors.remarks = "Must be at least 10 characters";
    }

    if (!values.rating || values.rating < 1 || values.rating > 5) {
      errors.rating = "Rating must be between 1 and 5";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 1,
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      addNewComment(values);
      resetForm();
    },
  });

  return (
    <div className="comment-form-container">
      <h1>Comment Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username && (
          <div
            className="error"
            style={{ color: "red", backgroundColor: "white" }}
          >
            {formik.errors.username}
          </div>
        )}
        <textarea
          name="remarks"
          placeholder="Remarks"
          value={formik.values.remarks}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></textarea>
        {formik.touched.remarks && formik.errors.remarks && (
          <div
            className="error"
            style={{ color: "red", backgroundColor: "white" }}
          >
            {formik.errors.remarks}
          </div>
        )}
        <input
          type="number"
          placeholder="Rating (1–5)"
          name="rating"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.rating && formik.errors.rating && (
          <div
            className="error"
            style={{ color: "red", backgroundColor: "white" }}
          >
            {formik.errors.rating}
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentForm;
