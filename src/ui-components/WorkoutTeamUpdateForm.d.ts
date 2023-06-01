/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { WorkoutTeam } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WorkoutTeamUpdateFormInputValues = {
    teamName?: string;
    description?: string;
    sports?: string[];
    numberOfMembers?: number;
    members?: string;
};
export declare type WorkoutTeamUpdateFormValidationValues = {
    teamName?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    sports?: ValidationFunction<string>;
    numberOfMembers?: ValidationFunction<number>;
    members?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkoutTeamUpdateFormOverridesProps = {
    WorkoutTeamUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    teamName?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    sports?: PrimitiveOverrideProps<TextFieldProps>;
    numberOfMembers?: PrimitiveOverrideProps<TextFieldProps>;
    members?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorkoutTeamUpdateFormProps = React.PropsWithChildren<{
    overrides?: WorkoutTeamUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    workoutTeam?: WorkoutTeam;
    onSubmit?: (fields: WorkoutTeamUpdateFormInputValues) => WorkoutTeamUpdateFormInputValues;
    onSuccess?: (fields: WorkoutTeamUpdateFormInputValues) => void;
    onError?: (fields: WorkoutTeamUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkoutTeamUpdateFormInputValues) => WorkoutTeamUpdateFormInputValues;
    onValidate?: WorkoutTeamUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WorkoutTeamUpdateForm(props: WorkoutTeamUpdateFormProps): React.ReactElement;
