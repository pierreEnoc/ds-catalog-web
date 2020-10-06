import { type } from 'os';
import React from 'react';

type Props = {
    text?: string;
}

const Alert = ({text}: Props ) => (
<div className="Alert alert-primary">
    Hello {text}!
</div>
);

export  default Alert;