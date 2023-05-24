/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CheckBoxOverridesProps = {
    CheckBox?: PrimitiveOverrideProps<ViewProps>;
    Frame37545869?: PrimitiveOverrideProps<ViewProps>;
    Workout?: PrimitiveOverrideProps<TextProps>;
    Frame37545871?: PrimitiveOverrideProps<ViewProps>;
    Frame37545872?: PrimitiveOverrideProps<ViewProps>;
    Frame37545873?: PrimitiveOverrideProps<ViewProps>;
    Frame37545874?: PrimitiveOverrideProps<ViewProps>;
    Frame37545875?: PrimitiveOverrideProps<ViewProps>;
    Frame37545876?: PrimitiveOverrideProps<ViewProps>;
    Metcon?: PrimitiveOverrideProps<TextProps>;
    Rectangle37545878?: PrimitiveOverrideProps<ViewProps>;
    Frame37545879?: PrimitiveOverrideProps<ViewProps>;
    Running?: PrimitiveOverrideProps<TextProps>;
    Rectangle37545881?: PrimitiveOverrideProps<ViewProps>;
    Frame37545882?: PrimitiveOverrideProps<ViewProps>;
    BodyBuilding?: PrimitiveOverrideProps<TextProps>;
    Rectangle37545884?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type CheckBoxProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CheckBoxOverridesProps | undefined | null;
}>;
export default function CheckBox(props: CheckBoxProps): React.ReactElement;
