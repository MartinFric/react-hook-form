import { Box, Grid2, Typography } from "@mui/material";
import { STEPS } from "../../../configuration/steps";

interface IProps {
  activeStep: number;
}

export const Stepper = (props: IProps) => {
  return (
    <Grid2 sx={{width: '100%'}} container direction="row"
    spacing={0} columns={12}>
      { STEPS.map((step, idx) => {
        const className = `stepper ${props.activeStep === idx ? 'active' : ''}`;
        return (
        <Grid2 key={idx} size={4} className={className}> 
          <Box sx={{width: '100%'}} style={{textAlign: 'center'}} >
          <Typography
                variant="body2"
                color="textPrimary"
                component="span"
              >
                 {step}
            </Typography>
          </Box>
        </Grid2>)
      })}
    </Grid2>
  )
}