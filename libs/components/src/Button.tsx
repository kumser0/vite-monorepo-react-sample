import React from 'react';
import './Button.css';

export interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return <button className="button">{text}</button>;
}
