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
export declare type TeamPhotoCreateFormInputValues = {
    bucket?: string;
    thumbnail?: string;
};
export declare type TeamPhotoCreateFormValidationValues = {
    bucket?: ValidationFunction<string>;
    thumbnail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamPhotoCreateFormOverridesProps = {
    TeamPhotoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    bucket?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeamPhotoCreateFormProps = React.PropsWithChildren<{
    overrides?: TeamPhotoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TeamPhotoCreateFormInputValues) => TeamPhotoCreateFormInputValues;
    onSuccess?: (fields: TeamPhotoCreateFormInputValues) => void;
    onError?: (fields: TeamPhotoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TeamPhotoCreateFormInputValues) => TeamPhotoCreateFormInputValues;
    onValidate?: TeamPhotoCreateFormValidationValues;
} & React.CSSProperties>;
export default function TeamPhotoCreateForm(props: TeamPhotoCreateFormProps): React.ReactElement;
