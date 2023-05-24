/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, SelectFieldProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormCreateCrossfitOverridesProps = {
    FormCreateCrossfit?: PrimitiveOverrideProps<ViewProps>;
    "Frame 428"?: PrimitiveOverrideProps<ViewProps>;
    TextField37783350?: PrimitiveOverrideProps<TextFieldProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    TextField37783372?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37783397?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type FormCreateCrossfitProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FormCreateCrossfitOverridesProps | undefined | null;
}>;
export default function FormCreateCrossfit(props: FormCreateCrossfitProps): React.ReactElement;
