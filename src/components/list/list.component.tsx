import { Datagrid, EmailField, List, TextField } from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField label="name" source="personalDetails.firstName" />
            <TextField label="surname" source="personalDetails.lastName" />
            <TextField label="birth date" source="personalDetails.dateOfBirth" />
            <EmailField label="email" source="contactDetails.email" />
            <TextField label="street" source="contactDetails.street" />
            <TextField label="street number" source="contactDetails.streetNo" />
            <TextField label="city" source="contactDetails.city" />
            <TextField label="country" source="contactDetails.country" />
        </Datagrid>
    </List>
)