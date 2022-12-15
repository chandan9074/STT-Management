import React from "react";
import Context from "../context";
import context from "../context";

const providers = [
    Context.BillingProvider,
    context.ManagerProvider
];

const ProviderInjection = ({app}: { app: any }) => {
    providers.forEach((Provider) => (app = <Provider>{app}</Provider>));
    return app;
};

export default ProviderInjection;
