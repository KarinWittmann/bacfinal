import React from 'react';

const Context = React.createContext({});

export const UserProvider = Context.Provider;
export const UserConsumer = Context.Consumer;
export default Context;
