/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TeamPhoto } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TeamPhotoUpdateFormInputValues = {
    bucket?: string;
    thumbnail?: string;
};
export declare type TeamPhotoUpdateFormValidationValues = {
    bucket?: ValidationFunction<string>;
    thumbnail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamPhotoUpdateFormOverridesProps = {
    TeamPhotoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    bucket?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeamPhotoUpdateFormProps = React.PropsWithChildren<{
    overrides?: TeamPhotoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    teamPhoto?: TeamPhoto;
    onSubmit?: (fields: TeamPhotoUpdateFormInputValues) => TeamPhotoUpdateFormInputValues;
    onSuccess?: (fields: TeamPhotoUpdateFormInputValues) => void;
    onError?: (fields: TeamPhotoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TeamPhotoUpdateFormInputValues) => TeamPhotoUpdateFormInputValues;
    onValidate?: TeamPhotoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TeamPhotoUpdateForm(props: TeamPhotoUpdateFormProps): React.ReactElement;
