// declare module '*.css';
import { ReactNode } from '@types/react';

declare class Timer {
    constructor(label: string, value: string);
    render: ReactNode;
}