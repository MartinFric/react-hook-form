import { Box, Button, Grid2, Input, MenuItem, Select } from "@mui/material"
import { Controller, useForm } from 'react-hook-form';
import { UserDetails } from "../create.component";
import { BACK_BUTTON, LABEL_CITY, LABEL_COUNTRY, LABEL_EMAIL, LABEL_STREET, LABEL_STREET_NO, NEXT_BUTTON } from "../../../configuration/texts";
import { STEPS_INPUTS } from "../../../configuration/steps";
import { COUNTRIES } from "../../../configuration/countries";

export class ContactInfo {
  street = "";
  streetNo = "";
  city = "";
  country = "";
  email = "";
}

export function ContactDetails(
  props: {
    formData: UserDetails,
    updateFormData: (data: UserDetails) => void,
    handleNext: () => void,
    handleBack: () => void
  }) {

  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ContactInfo>({
    mode: 'all',
    defaultValues: {
      ...props.formData.contactDetails
    }
  });

  const onSubmit = (data: ContactInfo) => {
    props.updateFormData({...props.formData, contactDetails: data})
    props.handleNext()
  }

  const handleBack = () => {
    props.updateFormData({
      ...props.formData, 
      contactDetails: {
        street: watch('street'),
        streetNo: watch('streetNo'),
        city: watch('city'),
        country: watch('country'),
        email: watch('email'),
      }
    })
    props.handleBack()
  }

  return (
    <>

      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <Grid2 sx={{ width: '100%', padding: '5px', borderColor: '#1769aa!important', borderRight: '1px solid', borderLeft: '1px solid', borderBottom: '1px solid'}} container direction="row" columns={12} spacing={0.5} >
          <Grid2 size={2}><Box>{LABEL_STREET}</Box></Grid2>
          <Grid2 size={8}><Box><Input type="text" {...register('street', { ...STEPS_INPUTS.contactDetails.street })} style={{ width: '90%' }}></Input></Box></Grid2>
          <Grid2 size={2}><Box>{errors.street && <span className="errorMsg">{errors.street.message}</span>}</Box></Grid2>

          <Grid2 size={2}><Box>{LABEL_STREET_NO}</Box></Grid2>
          <Grid2 size={8}><Box><Input type="text" {...register('streetNo', { ...STEPS_INPUTS.contactDetails.streetNo })} style={{ width: '30%' }}></Input></Box></Grid2>
          <Grid2 size={2}><Box>{errors.streetNo && <span className="errorMsg">{errors.streetNo.message}</span>}</Box></Grid2>

          <Grid2 size={2}><Box>{LABEL_CITY}</Box></Grid2>
          <Grid2 size={8}><Box><Input type="text" {...register('city', { ...STEPS_INPUTS.contactDetails.city })} style={{ width: '30%' }}></Input></Box></Grid2>
          <Grid2 size={2}><Box>{errors.city && <span className="errorMsg">{errors.city.message}</span>}</Box></Grid2>

          <Grid2 size={2}><Box>{LABEL_COUNTRY}</Box></Grid2>
          <Grid2 size={8}>
            <Box>
            <Controller
                    control={control}
                    name="country"
                    render={({ field: {onChange, value} }) =>
                    (<Select type="text" style={{ width: '30%' }} onChange={onChange} value={props.formData.contactDetails.country || value}> 
                      { COUNTRIES.map((country, idx) => (<MenuItem key={idx} value={country}>{country}</MenuItem>)) }
                    </Select>)}
                    rules={{
                      validate: { required: (value) => STEPS_INPUTS.personalDetails.dateOfBirth.required(value) }
                    }}
                  />
            </Box>
          </Grid2>
          <Grid2 size={2}><Box>{errors.country && <span className="errorMsg">{errors.country.message}</span>}</Box></Grid2>

          <Grid2 size={2}><Box>{LABEL_EMAIL}</Box></Grid2>
          <Grid2 size={8}><Box><Input type="text" {...register('email', { ...STEPS_INPUTS.contactDetails.email })} style={{ width: '30%' }}></Input></Box></Grid2>
          <Grid2 size={2}><Box>{errors.email && <span className="errorMsg">{errors.email.message}</span>}</Box></Grid2>
          
          <Grid2 sx={{ width: '100%' }} container columns={2}>
            <Grid2 size={1}><Button variant="outlined" onClick={handleBack} sx={{ minWidth: '100%', marginTop: '20px' }}>{BACK_BUTTON}</Button></Grid2>
            <Grid2 size={1}><Button variant="contained" disabled={!isValid} type="submit" sx={{ minWidth: '100%', marginTop: '20px' }}>{NEXT_BUTTON}</Button></Grid2>
          </Grid2>
        </Grid2>
      </form>
    </>
  )
}