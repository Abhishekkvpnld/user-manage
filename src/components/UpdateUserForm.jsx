import { Formik, Form, Field, ErrorMessage } from "formik";
import { FiSave } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import { BASE_URL } from "../utils/constants";
import { updateUserValidationSchema } from "../utils/validation";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/authSlice";

const UpdateUserForm = ({ user, id, setEditing }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSave = async (values) => {
        try {
            const res = await axios.put(`${BASE_URL}/api/users/${id}`, values);
    
            if (res?.data) {
                toast.success("User details updated successfully!");
                dispatch(updateUser({ id, userData: values }));
    
                setEditing(false);
                navigate("/");
            }
        } catch (error) {
            toast.error("Failed to update user details");
        }
    };
    

    return (
        <Formik
            initialValues={{
                first_name: user?.first_name || "",
                last_name: user?.last_name || "",
                email: user?.email || "",
            }}
            validationSchema={updateUserValidationSchema}
            onSubmit={handleSave}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form className="mt-4 flex flex-col">
                    <Field
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        className={`border p-2 w-full rounded-lg text-center ${errors.first_name && touched.first_name ? "border-red-500" : ""
                            }`}
                    />
                    <ErrorMessage name="first_name" component="div" className="text-red-500 text-sm mt-1" />

                    <Field
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        className={`border p-2 w-full rounded-lg mt-2 text-center ${errors.last_name && touched.last_name ? "border-red-500" : ""}`}
                    />
                    <ErrorMessage name="last_name" component="div" className="text-red-500 text-sm mt-1" />

                    <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={`border p-2 w-full rounded-lg mt-2 text-center ${errors.email && touched.email ? "border-red-500" : ""
                            }`}
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-4 px-5 py-2 rounded-lg shadow-md flex items-center gap-2 mx-auto bg-green-700 hover:bg-green-600 text-white"
                    >
                        <FiSave size={20} />
                        {isSubmitting ? "Saving..." : "Save"}
                    </button>
                </Form>
            )}
        </Formik>
    );
}
export default UpdateUserForm;
