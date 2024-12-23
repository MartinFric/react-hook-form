import dayjs from "dayjs";

export const STEPS = ["Personal Details", "Contact Information", "User Summary"];
export const STEPS_INPUTS = {
  personalDetails: {
    firstName: {
      required: 'First name is required!'
    },
    lastName: {
      required: 'Last name is required!'
    },
    dateOfBirth: {
      required: (value: string | number | dayjs.Dayjs | Date | null | undefined) => {
        console.log('value', value)
        if (!value) return "Date of Birth is required";
        if (dayjs().isBefore(dayjs(value), 'day')) return "Can not be a future date";
      },
    }
  },
  contactDetails: {
    street: {
      required: 'Street is required'
    },
    streetNo: {
      required: 'Street number is required'
    },
    city: {
      required: 'City number is required'
    },
    country: {
      required: (value: string) => {
        if(!value) return "Country is required"
      }
    },
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        message: 'Email is not valid'
      },
    },
  }
}