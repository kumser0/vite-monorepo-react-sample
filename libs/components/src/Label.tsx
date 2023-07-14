import React from 'react';
import './Label.css';

export interface LabelProps {
  text: string;
}

export default function Label({ text }: LabelProps) {
  return <div className="label">{text}</div>;
}
