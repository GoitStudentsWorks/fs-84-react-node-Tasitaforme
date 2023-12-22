import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { profileSettingSchema } from '../../schemas/profileSettings';
import { selectUserInfo } from '../../redux/auth/selectors';
import { updateUser } from '../../redux/auth/operations.js';
import { selectAccessToken } from '../../redux/auth/selectors';

import {
  UserInformationField,
  UserInformationErrorMessage,
  UserInformationSubmitButton,
  UserInformationCancelButton,
  UserInformationBlock,
  GenderButtonsWrapper,
  UserInformationRadioInput,
  UserInformationRadioFake,
  ActivityButtonsWrapper,
  UserInformationRadioLabel,
  UserInformationRadioText,
  UserGenderText,
  AvatarInput,
  AvatarContainer,
  AvatarImg,
  AvatarLabel,
  AvatarIcon,
  UserForm,
  UserButtonsWrapper,
} from './UserInformation.styled';

import testAvatar from './Avatar.png'; // не забути видалити
import downloadIcon from '../../assets/images/profileSettings/download.png';

export default function UserInformation() {
  const dispatch = useDispatch();

  // локальні стейти
  const [isAvatarChanged, setIsAvatarChanged] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    goal: '',
    gender: '',
    age: '',
    height: '',
    weight: '',
    activity: '',
  });

  // селектори
  const userProfile = useSelector(selectUserInfo);
  const token = useSelector(selectAccessToken);

  const initialValues = {
    name: userProfile.name,
    age: userProfile.age,
    gender: userProfile.gender,
    height: userProfile.height,
    weight: userProfile.weight,
    activity: userProfile.activityRatio,
    avatar: userProfile.avatarURL,
  };

  const handleChangeAvatar = (event) => {
    const avatarFile = event.target.files[0];

    if (!avatarFile) return;

    const avatarUrl = URL.createObjectURL(avatarFile);
    setAvatarFile(avatarFile);
    setAvatarPreview(avatarUrl);
    setIsAvatarChanged(true);
  };

  const handleClickSave = (values) => {
    setUserData((prev) => ({ ...prev, ...values }));
    dispatch(updateUser(userData, token));
  };

  const handleClickCancel = (resetForm) => {
    resetForm({ values: initialValues, isSubmitting: false });
    setIsAvatarChanged(false);
    setAvatarPreview(null);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={profileSettingSchema}
      onSubmit={handleClickSave}
    >
      {(formikProps) => (
        <UserForm>
          <UserInformationBlock>
            <label>Your name</label>
            <UserInformationField
              name="name"
              placeholder="Enter your name"
              className={formikProps.errors.name ? 'input-error' : ''}
            />
            <UserInformationErrorMessage name="name" component="p" />
          </UserInformationBlock>

          <UserInformationBlock>
            <p>Your photo</p>
            <AvatarInput
              id="avatar"
              name="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
            <AvatarLabel htmlFor="avatar">
              <AvatarContainer>
                <AvatarImg
                  src={avatarPreview || formikProps.values.avatar}
                  alt="userAvatar"
                ></AvatarImg>
              </AvatarContainer>
              <AvatarIcon src={downloadIcon} />
              Download new photo
            </AvatarLabel>
            <UserInformationErrorMessage name="avatar" component="div" />
          </UserInformationBlock>

          <UserInformationBlock>
            <label htmlFor="age">Your age</label>
            <UserInformationField
              name="age"
              placeholder="Enter your age"
              className={formikProps.errors.age ? 'input-error' : ''}
            />
            <UserInformationErrorMessage name="age" component="div" />
          </UserInformationBlock>

          <UserInformationBlock>
            <div id="my-gender-group">Gender</div>
            <GenderButtonsWrapper
              role="group"
              aria-labelledby="my-gender-group"
            >
              <UserInformationRadioLabel>
                <UserInformationRadioInput
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formikProps.values.gender === 'Male'}
                />
                <UserInformationRadioFake></UserInformationRadioFake>
                <UserGenderText>Male</UserGenderText>
              </UserInformationRadioLabel>

              <UserInformationRadioLabel>
                <UserInformationRadioInput
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formikProps.values.gender === 'Female'}
                />
                <UserInformationRadioFake></UserInformationRadioFake>
                <UserGenderText>Female</UserGenderText>
              </UserInformationRadioLabel>
            </GenderButtonsWrapper>
          </UserInformationBlock>

          <UserInformationBlock>
            <label htmlFor="height">Height</label>
            <UserInformationField
              name="height"
              placeholder="Enter your height"
              className={formikProps.errors.height ? 'input-error' : ''}
            />
            <UserInformationErrorMessage name="height" component="div" />
          </UserInformationBlock>

          <UserInformationBlock>
            <label htmlFor="weight">Weight</label>
            <UserInformationField
              name="weight"
              placeholder="Enter your weight"
              className={formikProps.errors.weight ? 'input-error' : ''}
            />
            <UserInformationErrorMessage name="weight" component="div" />
          </UserInformationBlock>

          <UserInformationBlock>
            <div id="my-activity-group">Your activity</div>
            <ActivityButtonsWrapper
              role="group"
              aria-labelledby="my-activity-group"
            >
              <UserInformationRadioLabel>
                <UserInformationRadioInput
                  type="radio"
                  name="activity"
                  value="1.2"
                  checked={formikProps.values.activity === 1.2}
                />
                <UserInformationRadioFake></UserInformationRadioFake>
                <UserInformationRadioText>
                  1.2 - if you do not have physical activity and sedentary work
                </UserInformationRadioText>
              </UserInformationRadioLabel>

              <UserInformationRadioLabel>
                <UserInformationRadioInput
                  type="radio"
                  name="activity"
                  checked={formikProps.values.activity === 1.375}
                  value="1.375"
                />
                <UserInformationRadioFake></UserInformationRadioFake>
                <UserInformationRadioText>
                  1.375 - if you do short runs or light gymnastics 1-3 times a
                  week
                </UserInformationRadioText>
              </UserInformationRadioLabel>

              <UserInformationRadioLabel>
                <UserInformationRadioInput
                  type="radio"
                  name="activity"
                  checked={formikProps.values.activity === 1.55}
                  value="1.55"
                />
                <UserInformationRadioFake></UserInformationRadioFake>
                <UserInformationRadioText>
                  1.55 - if you play sports with average loads 3-5 times a week
                </UserInformationRadioText>
              </UserInformationRadioLabel>

              <UserInformationRadioLabel>
                <UserInformationRadioInput
                  type="radio"
                  name="activity"
                  checked={formikProps.values.activity === 1.725}
                  value="1.725"
                />
                <UserInformationRadioFake></UserInformationRadioFake>
                <UserInformationRadioText>
                  1.725 ​​- if you train fully 6-7 times a week
                </UserInformationRadioText>
              </UserInformationRadioLabel>

              <UserInformationRadioLabel>
                <UserInformationRadioInput
                  type="radio"
                  name="activity"
                  checked={formikProps.values.activity === 1.9}
                  value="1.9"
                />
                <UserInformationRadioFake></UserInformationRadioFake>
                <UserInformationRadioText>
                  1.9 - if your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program
                </UserInformationRadioText>
              </UserInformationRadioLabel>
            </ActivityButtonsWrapper>
          </UserInformationBlock>

          <UserButtonsWrapper>
            <UserInformationSubmitButton
              type="submit"
              onClick={() => handleClickSave(formikProps.values)}
            >
              Save
            </UserInformationSubmitButton>
            <UserInformationCancelButton
              type="button"
              onClick={() => handleClickCancel(formikProps.resetForm)}
            >
              Cancel
            </UserInformationCancelButton>
          </UserButtonsWrapper>
        </UserForm>
      )}
    </Formik>
  );
}
