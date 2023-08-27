import '@/styles/globals.css';

import type { Metadata, NextPage } from 'next';
import React from 'react';

type Props = {
    children: React.ReactNode;
};

export const metadata: Metadata = {
    title: {
        template: '%s : Edgar Guzman',
        default: 'Edgar Guzman'
    },
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit ut aliquam purus sit. Commodo elit at imperdiet dui accumsan sit amet nulla. Sapien nec sagittis aliquam malesuada bibendum. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.',
    themeColor: [
        {
            media: '(prefers-color-scheme: light)',
            color: 'white'
        },
        {
            media: '(prefers-color-scheme: dark)',
            color: 'black'
        }
    ],
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1
    }
};

const RootLayout: NextPage<Props> = props => {
    const { children } = props;

    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
