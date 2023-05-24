/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, HeadingProps } from "@aws-amplify/ui-react";
import { PRCardProps } from "./PRCard";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PRFeatures2x3OverridesProps = {
    PRFeatures2x3?: PrimitiveOverrideProps<FlexProps>;
    "Frame 435"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 430"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 434"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 431"?: PrimitiveOverrideProps<FlexProps>;
    PRCard37883226?: PRCardProps;
    PRCard37883359?: PRCardProps;
    "Frame 432"?: PrimitiveOverrideProps<FlexProps>;
    PRCard37883379?: PRCardProps;
    PRCard37883380?: PRCardProps;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    PRCard37883392?: PRCardProps;
    PRCard37883393?: PRCardProps;
} & EscapeHatchProps;
export declare type PRFeatures2x3Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PRFeatures2x3OverridesProps | undefined | null;
}>;
export default function PRFeatures2x3(props: PRFeatures2x3Props): React.ReactElement;
