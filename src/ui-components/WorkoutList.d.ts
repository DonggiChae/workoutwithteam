/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { WorkoutListCardProps } from "./WorkoutListCard";
import { PaginationProps } from "./Pagination";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkoutListOverridesProps = {
    WorkoutList?: PrimitiveOverrideProps<ViewProps>;
    WorkoutListCard37652641?: WorkoutListCardProps;
    WorkoutListCard37652642?: WorkoutListCardProps;
    WorkoutListCard37652643?: WorkoutListCardProps;
    WorkoutListCard37652644?: WorkoutListCardProps;
    WorkoutListCard37652645?: WorkoutListCardProps;
    Pagination?: PaginationProps;
} & EscapeHatchProps;
export declare type WorkoutListProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: WorkoutListOverridesProps | undefined | null;
}>;
export default function WorkoutList(props: WorkoutListProps): React.ReactElement;
