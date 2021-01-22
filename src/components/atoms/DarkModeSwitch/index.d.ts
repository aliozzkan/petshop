import React, { Component } from "react";

export interface Props {
  onChange?: (value: boolean) => any;
  checked?: boolean;
  size?: number | string;
  speed?: number;
  className?: string;
}

declare const DarkModeSwitch: React.SFC<Props>;

export default DarkModeSwitch;
