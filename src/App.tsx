import { useRef, useState } from 'react'
import './App.scss'
import { Stepper } from './stepper/Stepper.component';
import { Grid2 } from '@mui/material'
import { PersonalDetails, UserInfo } from './steps/PersonalDetails.component';
import { ContactDetails, ContactInfo } from './steps/ContactDetails.component';
import { Summary } from './steps/SummaryComponent.component';

export class UserDetails {
  personalDetails: UserInfo = new UserInfo();
  contactDetails: ContactInfo = new ContactInfo();
}

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState(new UserDetails);
  const ref = useRef<HTMLDivElement | null>(null);
  

  const handleBack = () => {
    setActiveStep(activeStep-1)
  }

  const handleNext = () => {
    setActiveStep(activeStep+1) 
  }

  const updateFormData = (data: UserDetails) => {
    setData((prevData) => { 
      return ({...prevData, ...data})
  }) }

  return (
    <>
      <div className="App">
      <Grid2 container direction="row"
        spacing={0.5}>
        <Stepper activeStep={activeStep}/>
      </Grid2>
      {activeStep === 0 && (<PersonalDetails updateFormData={updateFormData} handleNext={handleNext} formData={data} ref={ref}/>)}
      {activeStep === 1 && (<ContactDetails updateFormData={updateFormData} handleNext={handleNext} handleBack={handleBack} formData={data}/>)}
      {activeStep === 2 && (<Summary handleBack={handleBack} formData={data}/>)}
      </div>
      <div>
        </div>
    </>
  )
}

export default App
