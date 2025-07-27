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
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <br />
        <div>
          <label>Middle Name</label>
          <input
            type="text"
            {...register("middleName", {
              minLength: { value: 3, message: "Min Length atleast 3" },
              maxLength: 5,
              required: true,
            })}
          />
          {errors.middleName && <p>{errors.middleName.message}</p>}
        </div>
        <br />
        <div>
          <label>Middle Name</label>
          <input type="text" {...register("lastName")} />
        </div>

        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
