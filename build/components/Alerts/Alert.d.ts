import React from "react";
declare type ContextProps = {
    show: (props: ShowProps) => void;
    hide: Function;
    courtain: (props: CourtainProps) => void;
};
export declare type CourtainProps = {
    callback?: Function;
    children?: any;
};
declare type ShowProps = {
    className?: string;
    modalClassName?: string;
    title?: any;
    body?: any;
    buttons?: Array<any>;
    height?: string | number;
    width?: string | number;
    customKeyframes?: any;
    customHTML?: any;
    position?: any;
    callback?: Function;
    overlayClassName?: string;
    duration?: number;
    color?: string;
    overlayColor?: string;
};
export declare function AlertProvider({ children }: {
    children: any;
}): JSX.Element;
declare const AlertContext: React.Context<Partial<ContextProps>>;
export default AlertContext;
