/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WorkoutRecordCreateFormInputValues = {
    date?: string;
    intensity?: string;
    pain?: string;
    weather?: string;
};
export declare type WorkoutRecordCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    intensity?: ValidationFunction<string>;
    pain?: ValidationFunction<string>;
    weather?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkoutRecordCreateFormOverridesProps = {
    WorkoutRecordCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    intensity?: PrimitiveOverrideProps<TextFieldProps>;
    pain?: PrimitiveOverrideProps<TextFieldProps>;
    weather?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorkoutRecordCreateFormProps = React.PropsWithChildren<{
    overrides?: WorkoutRecordCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WorkoutRecordCreateFormInputValues) => WorkoutRecordCreateFormInputValues;
    onSuccess?: (fields: WorkoutRecordCreateFormInputValues) => void;
    onError?: (fields: WorkoutRecordCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkoutRecordCreateFormInputValues) => WorkoutRecordCreateFormInputValues;
    onValidate?: WorkoutRecordCreateFormValidationValues;
} & React.CSSProperties>;
export default function WorkoutRecordCreateForm(props: WorkoutRecordCreateFormProps): React.ReactElement;
