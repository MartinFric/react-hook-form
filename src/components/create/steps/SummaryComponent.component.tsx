import { Box, Button, Grid2, Typography } from "@mui/material"
import dayjs from "dayjs";
import { UserDetails } from "../create.component";
import { BACK_BUTTON, LABEL_CITY, LABEL_COUNTRY, LABEL_DOB, LABEL_EMAIL, LABEL_H_CONTACT_DETAILS, LABEL_H_PERSONAL_DETAILS, LABEL_LASTNAME, LABEL_NAME, LABEL_STREET, LABEL_STREET_NO, SUBMIT_BUTTON } from "../../../configuration/texts";
import { useCreate, useNotify, useRecordContext, useRedirect } from 'react-admin';

export function Summary(
  props: {
    formData: UserDetails,
    handleBack: () => void,
  }) {
  const record = useRecordContext();
  const redirect = useRedirect();
  const notify = useNotify();
  const [create, { isPending }] = useCreate();

  const { formData: { personalDetails, contactDetails } } = props;

  const handleBack = () => {
    props.handleBack()
  }

  const handleCreate = () => {
    create('users', {
      data: {
        id: record?.id,
        personalDetails: {
          ...personalDetails,
          dateOfBirth: dayjs(personalDetails.dateOfBirth).format('DD/MM/YYYY')
        },
        contactDetails: { ...contactDetails }
      }
    })
    notify(`Post "${personalDetails.firstName} ${personalDetails.lastName}" saved!`);
    redirect('/users')
  }

  return (
    <>

      <Grid2 sx={{ width: '100%', padding: '5px', borderColor: '#1769aa!important', borderRight: '1px solid', borderLeft: '1px solid', borderBottom: '1px solid' }} container direction="row" columns={12} spacing={0.5} >
        <Grid2 size={12}>&nbsp;</Grid2>
        <Grid2 size={12}>
          <Box>
            <Typography
              variant="h5"
              color="textSecondary"
              component="span"
            >
              {LABEL_H_PERSONAL_DETAILS}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={2}><Box color="#1769aa"><b>{LABEL_NAME}</b></Box></Grid2>
        <Grid2 size={4}><Box>{personalDetails.firstName}</Box></Grid2>
        <Grid2 size={2}><Box color="#1769aa"><b>{LABEL_LASTNAME}</b></Box></Grid2>
        <Grid2 size={4}><Box>{personalDetails.lastName}</Box></Grid2>

        <Grid2 size={2}><Box color="#1769aa"><b>{LABEL_DOB}</b></Box></Grid2>
        <Grid2 size={10}><Box>{dayjs(personalDetails.dateOfBirth).format('DD/MM/YYYY')}</Box></Grid2>
        <Grid2 size={12}>&nbsp;</Grid2>
        <Grid2 size={12}>
          <Box>
            <Typography
              variant="h5"
              color="textSecondary"
              component="span"
            >
              {LABEL_H_CONTACT_DETAILS}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={2}><Box color="#1769aa"><b>{LABEL_STREET}</b></Box></Grid2>
        <Grid2 size={4}><Box>{contactDetails.street}</Box></Grid2>
        <Grid2 size={2}><Box color="#1769aa"><b>{LABEL_STREET_NO}</b></Box></Grid2>
        <Grid2 size={4}><Box>{contactDetails.streetNo}</Box></Grid2>

        <Grid2 size={2}><Box color="#1769aa"><b>{LABEL_CITY}</b></Box></Grid2>
        <Grid2 size={4}><Box>{contactDetails.city}</Box></Grid2>
        <Grid2 size={2}><Box color="#1769aa"><b>{LABEL_COUNTRY}</b></Box></Grid2>
        <Grid2 size={4}><Box>{contactDetails.country}</Box></Grid2>
        <Grid2 size={2}><Box color="#1769aa"><b>{LABEL_EMAIL}</b></Box></Grid2>
        <Grid2 size={10}><Box>{contactDetails.email}</Box></Grid2>
        <Grid2 sx={{ width: '100%' }} container columns={2}>
          <Grid2 size={1}><Button variant="outlined" onClick={handleBack} sx={{ minWidth: '100%', marginTop: '20px' }}>{BACK_BUTTON}</Button></Grid2>
          <Grid2 size={1}><Button disabled={isPending} variant="contained" onClick={handleCreate} sx={{ minWidth: '100%', marginTop: '20px' }}>{SUBMIT_BUTTON}</Button></Grid2>
        </Grid2>
      </Grid2>
    </>
  )
}