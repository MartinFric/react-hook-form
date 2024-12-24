import { Box, Button, Grid2, Input } from "@mui/material"
import { LABEL_DOB, LABEL_LASTNAME, LABEL_NAME, NEXT_BUTTON } from "../configuration/texts"
import { useForm, Controller } from 'react-hook-form';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayJS'
import { UserDetails } from "../App";
import { STEPS_INPUTS } from "../configuration/steps";

export class UserInfo {
  firstName = "";
  lastName = "";
  dateOfBirth = null;
}

interface Props {
  formData: UserDetails,
  updateFormData: (data: UserDetails) => void,
  handleNext: () => void
}

export const PersonalDetails = ({formData, updateFormData, handleNext}: Props) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserInfo>({
    mode: 'all',
    defaultValues: {...formData.personalDetails}
  });

  const onSubmit = (data: UserInfo) => {
    updateFormData({
      ...formData, personalDetails: data
      })
    handleNext()
  }
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }} >
          <Grid2 sx={{ width: '100%', padding: '5px', borderColor: '#1769aa!important', borderRight: '1px solid', borderLeft: '1px solid', borderBottom: '1px solid' }} container direction="row" columns={12} spacing={0.5} >
            <Grid2 size={2}><Box>{LABEL_NAME}</Box></Grid2>
            <Grid2 size={8}><Box><Input type="text" {...register('firstName', { ...STEPS_INPUTS.personalDetails.firstName })} style={{ width: '90%' }}></Input></Box></Grid2>
            <Grid2 size={2}><Box>{errors.firstName && <span className="errorMsg">{errors.firstName.message}</span>}</Box></Grid2>
            <Grid2 size={2}><Box>{LABEL_LASTNAME}</Box></Grid2>
            <Grid2 size={8}><Box><Input type="text" {...register('lastName', { ...STEPS_INPUTS.personalDetails.lastName })} style={{ width: '90%' }}></Input></Box></Grid2>
            <Grid2 size={2}><Box>{errors.lastName && <span className="errorMsg">{errors.lastName.message}</span>}</Box></Grid2>
            <Grid2 size={2}><Box>{LABEL_DOB}</Box></Grid2>
            <Grid2 size={8}>
              <Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Controller
                    control={control}
                    name="dateOfBirth"
                    render={({ field: {onChange, value} }) =>
                    (<DatePicker
                      value={formData.personalDetails.dateOfBirth || value}
                      onChange={onChange} />)}
                    rules={{
                      validate: { required: (value) => STEPS_INPUTS.personalDetails.dateOfBirth.required(value) }
                    }}
                  />
                </LocalizationProvider>
              </Box>
            </Grid2>
            <Grid2 size={2}><Box>{errors.dateOfBirth && <span className="errorMsg">{errors.dateOfBirth.message}</span>}</Box></Grid2>
            <Grid2 sx={{ width: '100%' }} container columns={2}>
              <Grid2 size={1}></Grid2>
              <Grid2 size={1}><Button variant="contained" disabled={!isValid} type="submit" sx={{ minWidth: '100%', marginTop: '20px' }}>{NEXT_BUTTON}</Button></Grid2>
            </Grid2>
          </Grid2>
        </form>
    </>
  )
}