/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Heading,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
export default function FormCreateTeam(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="820px"
      height="699px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="20px 20px 20px 20px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "FormCreateTeam")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 30px 0px 30px"
        {...getOverrideProps(overrides, "Frame 422")}
      >
        <Heading
          width="unset"
          height="unset"
          shrink="0"
          alignSelf="stretch"
          level="1"
          children="Create a team"
          {...getOverrideProps(overrides, "Heading")}
        ></Heading>
        <TextField
          width="unset"
          height="100px"
          label="Team Name"
          placeholder="Team Name"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField37672718")}
        ></TextField>
        <TextField
          width="unset"
          height="100px"
          label="Hash Tag"
          placeholder="ex) #crossfit #powerful"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField37672741")}
        ></TextField>
        <TextAreaField
          width="unset"
          height="191px"
          label="Description"
          placeholder="Description"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextAreaField")}
        ></TextAreaField>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="10px 0px 10px 0px"
          {...getOverrideProps(overrides, "Frame 423")}
        >
          <TextField
            width="unset"
            height="unset"
            placeholder="Cover picture"
            grow="1"
            shrink="1"
            basis="0"
            size="default"
            isDisabled={false}
            labelHidden={true}
            variation="quiet"
            {...getOverrideProps(overrides, "TextField37703120")}
          ></TextField>
          <Button
            width="177px"
            height="45px"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Upload"
            {...getOverrideProps(overrides, "Button37703127")}
          ></Button>
        </Flex>
        <Button
          width="unset"
          height="45px"
          shrink="0"
          alignSelf="stretch"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Create a Team"
          {...getOverrideProps(overrides, "Button37672775")}
        ></Button>
      </Flex>
    </Flex>
  );
}
