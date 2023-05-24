/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, HeadingProps, ImageProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersonalInfoCardOverridesProps = {
    PersonalInfoCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 442"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 443"?: PrimitiveOverrideProps<FlexProps>;
    Heading37964175?: PrimitiveOverrideProps<HeadingProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 444"?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Heading37964248?: PrimitiveOverrideProps<HeadingProps>;
    Heading37964251?: PrimitiveOverrideProps<HeadingProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField37964331?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37964352?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37964222?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37964223?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37964324?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37964338?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PersonalInfoCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PersonalInfoCardOverridesProps | undefined | null;
}>;
export default function PersonalInfoCard(props: PersonalInfoCardProps): React.ReactElement;
