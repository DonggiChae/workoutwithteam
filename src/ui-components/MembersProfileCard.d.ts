/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MembersProfileCardOverridesProps = {
    MembersProfileCard?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "Melinda Marcus"?: PrimitiveOverrideProps<TextProps>;
    "Design Engineer at Cloth Studios"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MembersProfileCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MembersProfileCardOverridesProps | undefined | null;
}>;
export default function MembersProfileCard(props: MembersProfileCardProps): React.ReactElement;
