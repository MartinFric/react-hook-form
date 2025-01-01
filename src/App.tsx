import { Admin, Resource } from "react-admin";
import { ContactInfo } from "./components/create/steps/ContactDetails.component";
import { UserInfo } from "./components/create/steps/PersonalDetails.component";
import { UserCreate } from "./components/create/create.component";
import { UserList } from "./components/list/list.component";
import { MOCK_DATA } from "./data/mock.data";
import fakeDataProvider from 'ra-data-fakerest'
import './App.scss'


export class UserDetails {
  personalDetails: UserInfo = new UserInfo();
  contactDetails: ContactInfo = new ContactInfo();
}

function App() {
  return (
    <>
      <Admin title="Zurich interview" dataProvider={fakeDataProvider(MOCK_DATA)}>
        <Resource name="users" list={UserList} create={UserCreate}/>
      </Admin>
    </>
  )
}

export default App
