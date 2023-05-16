/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SocialPostProps } from "./SocialPost";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodayWorkoutCardOverridesProps = {
    TodayWorkoutCard?: PrimitiveOverrideProps<FlexProps>;
    TodayWorkoutCard37554880?: SocialPostProps;
} & EscapeHatchProps;
export declare type TodayWorkoutCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TodayWorkoutCardOverridesProps | undefined | null;
}>;
export default function TodayWorkoutCard(props: TodayWorkoutCardProps): React.ReactElement;
