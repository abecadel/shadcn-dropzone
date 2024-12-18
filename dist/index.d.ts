import React from 'react';
import { type DropzoneProps as _DropzoneProps, type DropzoneState as _DropzoneState } from 'react-dropzone';
export interface DropzoneState extends _DropzoneState {
}
export interface DropzoneProps extends Omit<_DropzoneProps, 'children'> {
    containerClassName?: string;
    dropZoneClassName?: string;
    children?: (dropzone: DropzoneState) => React.ReactNode;
    showFilesList?: boolean;
    showErrorMessage?: boolean;
}
declare const Dropzone: ({ containerClassName, dropZoneClassName, children, showFilesList, showErrorMessage, ...props }: DropzoneProps) => React.JSX.Element;
export default Dropzone;
