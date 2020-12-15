// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "./textstyles/fonts.css";
import "./reset.css";
import "./FormLabel.css";
import React, { createContext, useContext } from "react";
import {
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import {
  SpacerPrimitive,
  TextPrimitive,
  ContainerPrimitive,
} from "./_internal_primitives";
import { FormLabelRoot } from "./_internal_formlabel";

const styles = [
  {
    type: "default",
    layers: {
      "formlabel-text": {
        none: {
          text: "Label",
        },
      },
    },
  },
  {
    type: "enum",
    propName: "labelPosition",
    values: [
      {
        propValue: "top",
        layers: {},
      },
      {
        propValue: "right",
        layers: {},
      },
      {
        propValue: "bottom",
        layers: {},
      },
      {
        propValue: "left",
        layers: {},
      },
    ],
  },
  {
    type: "boolean",
    propName: "small",
    layers: {},
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
  {
    type: "enum",
    propName: "labelPosition",
    values: [
      {
        propValue: "top",
        layers: {},
      },
      {
        propValue: "right",
        layers: {},
      },
      {
        propValue: "bottom",
        layers: {},
      },
      {
        propValue: "left",
        layers: {},
      },
    ],
  },
  {
    type: "boolean",
    propName: "small",
    layers: {},
  },
];

const variantPropTypes = [
  {
    type: "enum",
    propName: "labelPosition",
    propValues: ["top", "right", "bottom", "left"],
  },
  {
    type: "boolean",
    propName: "small",
  },
];

export const FormLabelContext = createContext(null);

function FormLabel(_props) {
  const defaults = useContext(FormLabelContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <FormLabelRoot
      {...props}
      key="formlabel-root"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "formlabel-root",
        scope: "CW4jwXTZxa",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <TextPrimitive
            id={"text_formlabel-text"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_CW4jwXTZxa_formlabel-text"
            }
            key={"formlabel-text"}
            text={props.label}
            element={getStyle("formlabel-text", "htmlElement")}
          />
          <SpacerPrimitive
            id={"spacer_63GVYcDVF1"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_CW4jwXTZxa_63GVYcDVF1"
            }
            key={"63GVYcDVF1"}
          />
          <ContainerPrimitive
            key={"formlabel-slot"}
            id={"slot_formlabel-slot"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_CW4jwXTZxa_formlabel-slot"
            }
            addSpacing={false}
          >
            {props.control}
          </ContainerPrimitive>
        </>
      )}
    </FormLabelRoot>
  );
}

FormLabel.__variants = [
  {
    name: "labelPosition",
    type: "group",
    variants: ["top", "right", "bottom", "left"],
  },
  {
    name: "small",
    type: "variant",
  },
];

export default FormLabel;
