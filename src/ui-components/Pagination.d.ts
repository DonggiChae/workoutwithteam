/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaginationOverridesProps = {
    Pagination?: PrimitiveOverrideProps<FlexProps>;
    "Component 12"?: PrimitiveOverrideProps<FlexProps>;
    "Component 13"?: PrimitiveOverrideProps<FlexProps>;
    "Component 14"?: PrimitiveOverrideProps<FlexProps>;
    "Component 15"?: PrimitiveOverrideProps<FlexProps>;
    "Component 16"?: PrimitiveOverrideProps<FlexProps>;
    "Component 17"?: PrimitiveOverrideProps<FlexProps>;
    "Component 18"?: PrimitiveOverrideProps<FlexProps>;
    "Component 19"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type PaginationProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PaginationOverridesProps | undefined | null;
}>;
export default function Pagination(props: PaginationProps): React.ReactElement;
