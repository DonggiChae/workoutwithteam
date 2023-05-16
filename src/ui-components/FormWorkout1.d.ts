/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, HeadingProps, SelectFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormWorkout1OverridesProps = {
    FormWorkout1?: PrimitiveOverrideProps<FlexProps>;
    "Frame 425"?: PrimitiveOverrideProps<ViewProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    "Frame 426"?: PrimitiveOverrideProps<ViewProps>;
    Heading37723176?: PrimitiveOverrideProps<HeadingProps>;
    Heading37723206?: PrimitiveOverrideProps<HeadingProps>;
} & EscapeHatchProps;
export declare type FormWorkout1Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FormWorkout1OverridesProps | undefined | null;
}>;
export default function FormWorkout1(props: FormWorkout1Props): React.ReactElement;
