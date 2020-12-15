// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React, { useRef } from "react";
import { combineRef, renderChildren } from "./_internal_utils";
import {
  VisuallyHidden,
  useFocusRing,
  useToggleState,
  useCheckbox,
  mergeProps,
} from "@visly/core";
import { usePrimitive } from "./_internal_usePrimitive";
import { useFormLabel } from "./_internal_formlabel";

function vislyToReactAriaProps(props) {
  return {
    isSelected: props.checked,
    ...props,
  };
}

export function CheckboxRoot(props) {
  const ref = useRef();
  const inputRef = useRef();
  const { isFocusVisible, focusProps } = useFocusRing();
  const { style, testId, innerRef, values, vislyProps } = usePrimitive({
    ref,
    props,
    ignoreFocusHandling: true,
    isFocusVisible,
    noUserSelect: true,
  });
  const reactAriaProps = vislyToReactAriaProps(props);
  const state = useToggleState(reactAriaProps);
  const { inputProps } = useCheckbox(reactAriaProps, state, inputRef);
  const { fieldProps } = useFormLabel();
  return (
    <label>
      <VisuallyHidden>
        <input
          {...mergeProps(inputProps, vislyProps, focusProps, fieldProps)}
          ref={inputRef}
        />
      </VisuallyHidden>
      <div
        ref={combineRef(props.measureRef, combineRef(innerRef, ref))}
        data-testid={testId}
        className={vislyProps.className}
        style={style}
      >
        {renderChildren(props.children, values)}
      </div>
    </label>
  );
}
