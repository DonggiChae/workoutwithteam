/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonalCardOverridesProps = {
    PersonalCard?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Frame37823745?: PrimitiveOverrideProps<FlexProps>;
    Frame37823746?: PrimitiveOverrideProps<FlexProps>;
    Frame37823747?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Frame37823749?: PrimitiveOverrideProps<FlexProps>;
    MyIcon37823750?: MyIconProps;
    "ID#123123123"?: PrimitiveOverrideProps<TextProps>;
    Followers?: PrimitiveOverrideProps<FlexProps>;
    MyIcon37843108?: MyIconProps;
    "99 Followers"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PersonalCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PersonalCardOverridesProps | undefined | null;
}>;
export default function PersonalCard(props: PersonalCardProps): React.ReactElement;
