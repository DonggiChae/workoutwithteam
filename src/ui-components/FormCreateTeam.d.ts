/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, HeadingProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormCreateTeamOverridesProps = {
    FormCreateTeam?: PrimitiveOverrideProps<FlexProps>;
    "Frame 422"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    TextField37672718?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37672741?: PrimitiveOverrideProps<TextFieldProps>;
    TextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    "Frame 423"?: PrimitiveOverrideProps<FlexProps>;
    TextField37703120?: PrimitiveOverrideProps<TextFieldProps>;
    Button37703127?: PrimitiveOverrideProps<ButtonProps>;
    Button37672775?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type FormCreateTeamProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FormCreateTeamOverridesProps | undefined | null;
}>;
export default function FormCreateTeam(props: FormCreateTeamProps): React.ReactElement;
