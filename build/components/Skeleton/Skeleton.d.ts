import { FunctionComponent } from "react";
declare type SkeletonProps = {
    wrapper?: any;
    count?: number;
    duration?: number;
    width?: number | string;
    height?: number | string;
    circle?: boolean;
    style?: Object;
    className?: string;
    highlightColor?: string;
    baseColor?: string;
};
declare const Skeleton: FunctionComponent<SkeletonProps>;
export default Skeleton;
