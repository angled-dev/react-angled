import React, { useContext } from "react";
import Button from "../Buttons";
import AlertContext, { AlertProvider } from "./Alert";
import { Meta, Story } from "@storybook/react/types-6-0";

export default {
  title: "Components/Alerts",
  component: AlertProvider,
} as Meta;

const _Primary = () => {
  const { show } = useContext(AlertContext);
  return (
    <Button
      variant="cancel"
      onClick={() => {
        console.log("click");
        show({
          title: "Alert Title",
          body: "Alert body",
          buttons: [
            <Button key={0} variant="cancel">
              Cancel
            </Button>,
            <Button key={1} variant="confirm">
              Confirm
            </Button>,
          ],
          callback: () => console.log("button 2 callback"),
        });
      }}
    >
      Primary
    </Button>
  );
};

export const _Timed = () => {
  const { show } = useContext(AlertContext);
  return (
    <Button
      variant="confirm"
      onClick={() =>
        show({
          title: "Alert Title",
          body: "Alert body",
          height: "50px",
          duration: 2000,
          callback: () => console.log("button 1 callback"),
        })
      }
    >
      Timed
    </Button>
  );
};

export const _Courtain = () => {
  const { courtain, hide } = useContext(AlertContext);
  return (
    <Button
      onClick={() => {
        courtain({
          children: (
            <Button variant="secondary" onClick={() => hide()}>
              Close
            </Button>
          ),
        });
      }}
    >
      Courtain
    </Button>
  );
};

const Template = ({ children }) => <AlertProvider children={children} />;

export const Primary = Template.bind({});
Primary.args = { children: <_Primary /> };

export const Timed = Template.bind({});
Timed.args = { children: <_Timed /> };

export const Courtain = Template.bind({});
Courtain.args = { children: <_Courtain /> };
