import { Formik } from 'formik';
import { SignInFormikForm } from '../SignInForm/SignInForm.styled';
import {
  FormikStyledField,
  FormikStyledErrorMessage,
  FormikStyledLabel,
} from '../StyledComponents/Formik.styled';
import { Button, HeadlineSecond } from '../StyledComponents/Components.styled';
import { changePasswordSchema } from '../../schemas/formik';
import toast from 'react-hot-toast';
import { changePassword } from '../../requests/changePassword';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../../redux/auth/selectors';

export default function ChangePasswordForm() {
  const { email } = useSelector(selectUserInfo);

  const initialValues = {
    password: '',
    newPassword: '',
  };

  const onSubmit = async (values, actions) => {
    try {
      await changePassword({ email, ...values });
      toast.success('Your password has been successfully changed!');
    } catch (error) {
      toast.error(`${error}`);
    }
    actions.resetForm();
  };

  return (
    <section style={{ paddingTop: '24px', paddingBottom: '24px' }}>
      <HeadlineSecond style={{ marginBottom: '12px' }}>
        Change password
      </HeadlineSecond>
      <Formik
        initialValues={initialValues}
        validationSchema={changePasswordSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting, isValid }) => (
          <SignInFormikForm>
            <FormikStyledField
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              className={
                touched.quantity
                  ? errors.quantity
                    ? 'input-error'
                    : 'input-success'
                  : 'input-normal'
              }
            />
            <FormikStyledErrorMessage component="p" name="password" />
            <FormikStyledField
              type="password"
              name="newPassword"
              placeholder="New password"
              autoComplete="off"
              className={
                touched.quantity
                  ? errors.quantity
                    ? 'input-error'
                    : 'input-success'
                  : 'input-normal'
              }
            />
            <FormikStyledErrorMessage component="p" name="newPassword" />

            <Button type="submit" disabled={!isValid || isSubmitting}>
              Update Password
            </Button>
          </SignInFormikForm>
        )}
      </Formik>
    </section>
  );
}
