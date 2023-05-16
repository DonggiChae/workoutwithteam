/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import WorkoutListCard from "./WorkoutListCard";
import { Pagination as PaginationCustom } from "./Pagination";
import { View } from "@aws-amplify/ui-react";
export default function WorkoutList(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1047px"
      height="565px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "WorkoutList")}
      {...rest}
    >
      <WorkoutListCard
        display="flex"
        gap="10px"
        direction="column"
        width="958px"
        height="73px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="78px"
        left="39px"
        padding="10px 20px 10px 20px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "WorkoutListCard37652641")}
      ></WorkoutListCard>
      <WorkoutListCard
        display="flex"
        gap="10px"
        direction="column"
        width="958px"
        height="73px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="39px"
        padding="10px 20px 10px 20px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "WorkoutListCard37652642")}
      ></WorkoutListCard>
      <WorkoutListCard
        display="flex"
        gap="10px"
        direction="column"
        width="958px"
        height="73px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="156px"
        left="39px"
        padding="10px 20px 10px 20px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "WorkoutListCard37652643")}
      ></WorkoutListCard>
      <WorkoutListCard
        display="flex"
        gap="10px"
        direction="column"
        width="958px"
        height="73px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="234px"
        left="39px"
        padding="10px 20px 10px 20px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "WorkoutListCard37652644")}
      ></WorkoutListCard>
      <WorkoutListCard
        display="flex"
        gap="10px"
        direction="column"
        width="958px"
        height="73px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="312px"
        left="39px"
        padding="10px 20px 10px 20px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "WorkoutListCard37652645")}
      ></WorkoutListCard>
      <PaginationCustom
        display="flex"
        gap="12px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="390px"
        left="386px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Pagination")}
      ></PaginationCustom>
    </View>
  );
}
