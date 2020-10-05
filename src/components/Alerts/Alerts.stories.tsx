import React, { useContext } from "react";
import Button from "../Buttons";
import AlertContext, { AlertProvider } from "./Alert";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Components/Alerts",
  component: AlertProvider,
} as Meta;

const ShowButton = () => {
  const { show, courtain, hide } = useContext(AlertContext);

  const Button2 = () => (
    <Button
      variant="confirm"
      onClick={() =>
        show({
          title: "Alert Title",
          body: "Alert body",
          buttons: [<Button1 key={0} />],
          height: "50px",
          duration: 2000,
          callback: () => console.log("button 1 callback"),
        })
      }
    >
      Timed
    </Button>
  );

  const Button1 = () => (
    <Button
      variant="cancel"
      onClick={() => {
        console.log("click");
        show({
          title: "Alert Title",
          body: "Alert body",
          buttons: [<Button1 key={0} />, <Button2 key={1} />],
          callback: () => console.log("button 2 callback"),
        });
      }}
    >
      Primary
    </Button>
  );

  return (
    <>
      <Button1 />
      <Button2 />
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
    </>
  );
};

export const Primary: React.FC<{}> = () => (
  <AlertProvider>
    <ShowButton />
  </AlertProvider>
);
