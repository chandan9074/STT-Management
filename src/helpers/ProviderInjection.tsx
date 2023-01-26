import React from "react";
import Context from "../context";

const providers = [
  Context.BillingProvider,
  Context.RoleProvider,
  Context.CommonProvider,
  Context.DashboardProvider,
  Context.ScriptProvider,
];

const ProviderInjection = ({ app }: { app: any }) => {
  providers.forEach((Provider) => (app = <Provider>{app}</Provider>));
  return app;
};

export default ProviderInjection;
