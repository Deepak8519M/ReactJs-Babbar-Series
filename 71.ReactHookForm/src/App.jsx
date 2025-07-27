import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitting the Form", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            {...register("firstName", {
              required: true,
              maxLength: 20,
              minLength: { value: 3, message: "Min Length Less than 3" },
            })}
            className={errors.firstName ? "input-error" : ""}
          />
          {errors.firstName && (
            <p className="err-msg">{errors.firstName.message}</p>
          )}
        </div>
        <br />
        <div>
          <label>Middle Name</label>
          <input
            type="text"
            {...register("middleName", {
              minLength: { value: 3, message: "Min Length atleast 3" },
              maxLength: { value: 6, message: "Max length of words 5" },
              required: true,
            })}
          />
          {errors.middleName && <p>{errors.middleName.message}</p>}
        </div>
        <br />
        <div>
          <label>Last Name</label>
          <input
            type="text"
            {...register("lastName", {
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Last Name is not per the rules",
              },
            })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
