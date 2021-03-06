import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (name, text) =>
      setValues({
        ...values,
        [name]: text,
      }),
  ];
};

export { useForm };
