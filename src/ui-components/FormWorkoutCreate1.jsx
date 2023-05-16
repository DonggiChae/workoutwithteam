/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Heading, View } from "@aws-amplify/ui-react";
import FormCreateCrossfit from "./FormCreateCrossfit";
export default function FormWorkoutCreate1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="766px"
      height="765px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "FormWorkoutCreate1")}
      {...rest}
    >
      <View
        width="762px"
        height="765px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 425")}
      >
        <View
          width="717px"
          height="65px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="15px"
          left="22px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 426")}
        >
          <Heading
            width="445px"
            height="unset"
            position="absolute"
            top="5px"
            left="26px"
            level="1"
            children="Create a Workout"
            {...getOverrideProps(overrides, "Heading37743239")}
          ></Heading>
          <Heading
            width="unset"
            height="unset"
            position="absolute"
            top="25px"
            left="471px"
            level="3"
            children="2023/05/10"
            {...getOverrideProps(overrides, "Heading37743240")}
          ></Heading>
        </View>
        <FormCreateCrossfit
          width="717px"
          height="402px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="136px"
          left="22px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "FormCreateCrossfit")}
        ></FormCreateCrossfit>
      </View>
    </View>
  );
}
