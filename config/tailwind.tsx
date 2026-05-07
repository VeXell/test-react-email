import React from 'react';
import { Tailwind, pixelBasedPreset } from 'react-email';
import colors from 'tailwindcss/colors';

export const TailwindConfig: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Tailwind
            config={{
                presets: [pixelBasedPreset],
                theme: {
                    screens: {
                        sm: '640px',
                        md: '768px',
                        lg: '1024px',
                    },
                    colors: {
                        transparent: 'transparent',
                        current: 'currentColor',
                        inherit: 'inherit',
                        black: colors.black,
                        white: colors.white,
                        gray: colors.gray,
                        red: colors.red,
                        green: colors.green,
                        orange: colors.orange,
                        yellow: colors.yellow,
                        blue: colors.blue,
                        sky: colors.sky,
                        amber: colors.amber,
                        lime: colors.lime,
                        purple: colors.purple,
                        pink: colors.pink,
                        theme1: '#6E2C90',
                        themeNewYear: '#19ABE4',
                        theme14Feb: '#ef5a91',
                        theme23Feb: '#000000',
                        theme8March: '#E97AB0',
                    },
                    extend: {
                        screens: {
                            print: { raw: 'print' },
                        },
                    },
                },
            }}
        >
            {children}
        </Tailwind>
    );
};
