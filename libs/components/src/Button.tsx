import React from 'react';
import style from './Button.module.less';

export interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return <button className={style.button}>{text}</button>;
}
