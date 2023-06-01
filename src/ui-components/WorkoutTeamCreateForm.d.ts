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
export declare type WorkoutTeamCreateFormInputValues = {
    teamName?: string;
    description?: string;
    sports?: string[];
    numberOfMembers?: number;
    members?: string;
};
export declare type WorkoutTeamCreateFormValidationValues = {
    teamName?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    sports?: ValidationFunction<string>;
    numberOfMembers?: ValidationFunction<number>;
    members?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkoutTeamCreateFormOverridesProps = {
    WorkoutTeamCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    teamName?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    sports?: PrimitiveOverrideProps<TextFieldProps>;
    numberOfMembers?: PrimitiveOverrideProps<TextFieldProps>;
    members?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorkoutTeamCreateFormProps = React.PropsWithChildren<{
    overrides?: WorkoutTeamCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WorkoutTeamCreateFormInputValues) => WorkoutTeamCreateFormInputValues;
    onSuccess?: (fields: WorkoutTeamCreateFormInputValues) => void;
    onError?: (fields: WorkoutTeamCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkoutTeamCreateFormInputValues) => WorkoutTeamCreateFormInputValues;
    onValidate?: WorkoutTeamCreateFormValidationValues;
} & React.CSSProperties>;
export default function WorkoutTeamCreateForm(props: WorkoutTeamCreateFormProps): React.ReactElement;
