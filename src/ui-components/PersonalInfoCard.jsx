/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading, Image, TextField } from "@aws-amplify/ui-react";
export default function PersonalInfoCard(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="973px"
      height="810px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="50px 40px 50px 40px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "PersonalInfoCard")}
      {...rest}
    >
      <Flex
        gap="0"
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
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 442")}
      >
        <Flex
          gap="500px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="40px 20px 40px 20px"
          {...getOverrideProps(overrides, "Frame 443")}
        >
          <Heading
            width="unset"
            height="unset"
            shrink="0"
            level="1"
            children="Personal Info"
            {...getOverrideProps(overrides, "Heading37964175")}
          ></Heading>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="small"
            isDisabled={false}
            variation="default"
            children="Edit"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
        <Flex
          gap="30px"
          direction="row"
          width="972px"
          height="121px"
          justifyContent="flex-start"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 10px 0px 10px"
          {...getOverrideProps(overrides, "Frame 444")}
        >
          <Image
            width="96px"
            height="96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <Heading
            width="unset"
            height="unset"
            shrink="0"
            level="2"
            children="First Name"
            {...getOverrideProps(overrides, "Heading37964248")}
          ></Heading>
          <Heading
            width="unset"
            height="unset"
            shrink="0"
            level="2"
            children="Second Name"
            {...getOverrideProps(overrides, "Heading37964251")}
          ></Heading>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Account"
            placeholder="john.doe@awsamplify.com"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="quiet"
            {...getOverrideProps(overrides, "TextField37964331")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Date of Birth"
            placeholder="john.doe@awsamplify.com"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="quiet"
            {...getOverrideProps(overrides, "TextField37964352")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Phone"
            placeholder="+82 10-1234-1234"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="quiet"
            {...getOverrideProps(overrides, "TextField37964222")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Email"
            placeholder="john.doe@awsamplify.com"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="quiet"
            {...getOverrideProps(overrides, "TextField37964223")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Location"
            placeholder="Suwon, Republic of Korea"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="quiet"
            {...getOverrideProps(overrides, "TextField37964324")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Workout"
            placeholder="#crossfit #running"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="quiet"
            {...getOverrideProps(overrides, "TextField37964338")}
          ></TextField>
        </Flex>
      </Flex>
    </Flex>
  );
}
