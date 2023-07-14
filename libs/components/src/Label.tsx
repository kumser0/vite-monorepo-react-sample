import React from 'react';
import style from './Label.module.less';

export interface LabelProps {
  text: string;
}

export default function Label({ text }: LabelProps) {
  return <div className={style.label}>{text}</div>;
}
