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
export declare type PRCardOverridesProps = {
    PRCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 432"?: PrimitiveOverrideProps<FlexProps>;
    "Back Squat"?: PrimitiveOverrideProps<TextProps>;
    MyIcon?: MyIconProps;
    "330LBS"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PRCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PRCardOverridesProps | undefined | null;
}>;
export default function PRCard(props: PRCardProps): React.ReactElement;
