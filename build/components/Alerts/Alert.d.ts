import React from "react";
declare type ContextProps = {
    show: Function;
    hide: Function;
};
declare const AlertContext: React.Context<Partial<ContextProps>>;
export default AlertContext;
export declare function AlertProvider({ children }: {
    children: any;
}): JSX.Element;
