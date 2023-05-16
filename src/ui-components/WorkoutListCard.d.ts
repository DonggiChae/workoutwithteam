/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkoutListCardOverridesProps = {
    WorkoutListCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 420"?: PrimitiveOverrideProps<FlexProps>;
    "2023/05/10"?: PrimitiveOverrideProps<TextProps>;
    "workout Name"?: PrimitiveOverrideProps<TextProps>;
    "Donggi Chae"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type WorkoutListCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: WorkoutListCardOverridesProps | undefined | null;
}>;
export default function WorkoutListCard(props: WorkoutListCardProps): React.ReactElement;
