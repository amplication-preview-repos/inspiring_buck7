import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AppModelList } from "./appModel/AppModelList";
import { AppModelCreate } from "./appModel/AppModelCreate";
import { AppModelEdit } from "./appModel/AppModelEdit";
import { AppModelShow } from "./appModel/AppModelShow";
import { CookieList } from "./cookie/CookieList";
import { CookieCreate } from "./cookie/CookieCreate";
import { CookieEdit } from "./cookie/CookieEdit";
import { CookieShow } from "./cookie/CookieShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SukesPlugin"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AppModel"
          list={AppModelList}
          edit={AppModelEdit}
          create={AppModelCreate}
          show={AppModelShow}
        />
        <Resource
          name="Cookie"
          list={CookieList}
          edit={CookieEdit}
          create={CookieCreate}
          show={CookieShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
