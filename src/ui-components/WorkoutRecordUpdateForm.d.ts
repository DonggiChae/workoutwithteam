/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { WorkoutRecord } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WorkoutRecordUpdateFormInputValues = {
    date?: string;
    intensity?: string;
    pain?: string;
    weather?: string;
};
export declare type WorkoutRecordUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
    intensity?: ValidationFunction<string>;
    pain?: ValidationFunction<string>;
    weather?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkoutRecordUpdateFormOverridesProps = {
    WorkoutRecordUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    intensity?: PrimitiveOverrideProps<TextFieldProps>;
    pain?: PrimitiveOverrideProps<TextFieldProps>;
    weather?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorkoutRecordUpdateFormProps = React.PropsWithChildren<{
    overrides?: WorkoutRecordUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    workoutRecord?: WorkoutRecord;
    onSubmit?: (fields: WorkoutRecordUpdateFormInputValues) => WorkoutRecordUpdateFormInputValues;
    onSuccess?: (fields: WorkoutRecordUpdateFormInputValues) => void;
    onError?: (fields: WorkoutRecordUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkoutRecordUpdateFormInputValues) => WorkoutRecordUpdateFormInputValues;
    onValidate?: WorkoutRecordUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WorkoutRecordUpdateForm(props: WorkoutRecordUpdateFormProps): React.ReactElement;
