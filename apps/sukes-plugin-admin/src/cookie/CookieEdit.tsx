import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AppModelTitle } from "../appModel/AppModelTitle";

export const CookieEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="appField.id" reference="AppModel" label="App">
          <SelectInput optionText={AppModelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
