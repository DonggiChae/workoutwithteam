/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HeadingProps, ViewProps } from "@aws-amplify/ui-react";
import { FormCreateCrossfitProps } from "./FormCreateCrossfit";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FormWorkoutCreate1OverridesProps = {
    FormWorkoutCreate1?: PrimitiveOverrideProps<ViewProps>;
    "Frame 425"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 426"?: PrimitiveOverrideProps<ViewProps>;
    Heading37743239?: PrimitiveOverrideProps<HeadingProps>;
    Heading37743240?: PrimitiveOverrideProps<HeadingProps>;
    FormCreateCrossfit?: FormCreateCrossfitProps;
} & EscapeHatchProps;
export declare type FormWorkoutCreate1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FormWorkoutCreate1OverridesProps | undefined | null;
}>;
export default function FormWorkoutCreate1(props: FormWorkoutCreate1Props): React.ReactElement;
