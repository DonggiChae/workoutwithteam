/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Heading, SelectField, View } from "@aws-amplify/ui-react";
export default function FormWorkout1(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="820px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="0px 29px 0px 29px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "FormWorkout1")}
      {...rest}
    >
      <View
        width="unset"
        height="294px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 425")}
      >
        <SelectField
          width="300px"
          height="unset"
          placeholder="Workout"
          position="absolute"
          top="101px"
          left="48px"
          size="large"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "SelectField")}
        ></SelectField>
        <View
          width="833px"
          height="65px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
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
            {...getOverrideProps(overrides, "Heading37723176")}
          ></Heading>
          <Heading
            width="unset"
            height="unset"
            position="absolute"
            top="25px"
            left="471px"
            level="3"
            children="2023/05/10"
            {...getOverrideProps(overrides, "Heading37723206")}
          ></Heading>
        </View>
      </View>
    </Flex>
  );
}
