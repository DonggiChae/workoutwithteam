/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, SelectField, TextField, View } from "@aws-amplify/ui-react";
export default function FormCreateCrossfit(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="803px"
      height="492px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "FormCreateCrossfit")}
      {...rest}
    >
      <View
        width="721px"
        height="405px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="28px"
        left="23px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 428")}
      >
        <TextField
          width="300px"
          height="unset"
          placeholder="Wod Name"
          position="absolute"
          top="73px"
          left="12px"
          size="large"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "TextField37783350")}
        ></TextField>
        <SelectField
          width="300px"
          height="unset"
          placeholder="Crossfit"
          position="absolute"
          top="2px"
          left="12px"
          size="large"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "SelectField")}
        ></SelectField>
        <TextField
          width="300px"
          height="unset"
          label="Detail"
          placeholder="Equipment"
          position="absolute"
          top="144px"
          left="12px"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="quiet"
          {...getOverrideProps(overrides, "TextField37783372")}
        ></TextField>
        <TextField
          width="300px"
          height="unset"
          label="Scale"
          placeholder="Scale"
          position="absolute"
          top="186px"
          left="349px"
          size="large"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "TextField37783397")}
        ></TextField>
        <Button
          width="unset"
          height="unset"
          position="absolute"
          top="256px"
          left="15px"
          size="large"
          isDisabled={false}
          variation="default"
          children="+"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </View>
    </View>
  );
}
