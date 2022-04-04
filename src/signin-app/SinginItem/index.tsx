import { useState } from "react";

type SignInItemProps = {
  placeholder: string;
  setInput: (value: string) => void;
  value: string;
};

export const SignInItem: React.FC<SignInItemProps> = (props) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      name="text"
      onChange={(e) => props.setInput(e.target.value)}
      value={props.value}
    />
  );
};
