/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkoutCardOverridesProps = {
    WorkoutCard?: PrimitiveOverrideProps<FlexProps>;
    Text?: PrimitiveOverrideProps<FlexProps>;
    Headline?: PrimitiveOverrideProps<FlexProps>;
    Workout?: PrimitiveOverrideProps<TextProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    "Nikhil S"?: PrimitiveOverrideProps<TextProps>;
    "2nd December 2021"?: PrimitiveOverrideProps<TextProps>;
    Article?: PrimitiveOverrideProps<FlexProps>;
    MyIcon37943856?: MyIconProps;
    "1. 21-15-9 Ring Muscle ups DB Onearm Overhead Squats (80/55) *scale A 15-12-9 reps ..."?: PrimitiveOverrideProps<TextProps>;
    Share37943858?: PrimitiveOverrideProps<FlexProps>;
    Share37943859?: PrimitiveOverrideProps<TextProps>;
    MyIcon37943860?: MyIconProps;
    MyIcon37943861?: MyIconProps;
    MyIcon37943862?: MyIconProps;
    "Read more37943925"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon37943926?: MyIconProps;
    "Read more37943927"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type WorkoutCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: WorkoutCardOverridesProps | undefined | null;
}>;
export default function WorkoutCard(props: WorkoutCardProps): React.ReactElement;
