/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamPageCardOverridesProps = {
    TeamPageCard?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Frame375410531?: PrimitiveOverrideProps<FlexProps>;
    Frame375410532?: PrimitiveOverrideProps<FlexProps>;
    Frame375410533?: PrimitiveOverrideProps<FlexProps>;
    "Team Name"?: PrimitiveOverrideProps<TextProps>;
    Frame375410537?: PrimitiveOverrideProps<FlexProps>;
    MyIcon375410538?: MyIconProps;
    Descriptions?: PrimitiveOverrideProps<TextProps>;
    Share375410558?: PrimitiveOverrideProps<FlexProps>;
    Share375410559?: PrimitiveOverrideProps<FlexProps>;
    "Profile Avatar"?: PrimitiveOverrideProps<ViewProps>;
    "99375410561"?: PrimitiveOverrideProps<TextProps>;
    Like?: PrimitiveOverrideProps<FlexProps>;
    MyIcon375410566?: MyIconProps;
    "99375410567"?: PrimitiveOverrideProps<TextProps>;
    MyIcon375410568?: MyIconProps;
} & EscapeHatchProps;
export declare type TeamPageCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TeamPageCardOverridesProps | undefined | null;
}>;
export default function TeamPageCard(props: TeamPageCardProps): React.ReactElement;
