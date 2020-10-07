import { FunctionComponent } from "react";
import { CourtainProps as CourtainFunctionProps } from "./Alert";
interface CourtainProps extends CourtainFunctionProps {
    visible: boolean;
    setVisible: Function;
}
declare const Courtain: FunctionComponent<CourtainProps>;
export default Courtain;
