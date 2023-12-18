import { useState } from 'react';
import { Field, Formik } from 'formik';
import {
  FormikStyledField,
  FormikStyledForm,
} from '../../StyledComponents/Formik.styled';
import { Button } from '../../StyledComponents/Components.styled';

export default function FormActivity({ handleNextStep }) {
  const initialValues = {
    picked: '',
  };

  const onSubmit = (values) => {
    console.log(values);
    handleNextStep();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ errors, touched, isSubmitting, isValid }) => (
        <FormikStyledForm>
          <label>
            1.2 - if you do not have physical activity and sedentary work
            <Field type="radio" name="picked" value="1.2" />
          </label>
          <label>
            1.375 - if you do short runs or light gymnastics 1-3 times a week
            <Field type="radio" name="picked" value="1.375" />
          </label>
          <label>
            1.55 - if you play sports with average loads 3-5 times a week
            <Field type="radio" name="picked" value="1.55" />
          </label>
          <label>
            1.725 ​​- if you train fully 6-7 times a week
            <Field type="radio" name="picked" value="1.725" />
          </label>
          <label>
            1.9 - if your work is related to physical labor, you train 2 times a
            day and include strength exercises in your training program
            <Field type="radio" name="picked" value="1.9" />
          </label>

          <Button type="submit" /* disabled={!isValid || isSubmitting} */>
            Next
          </Button>
        </FormikStyledForm>
      )}
    </Formik>
  );
}
