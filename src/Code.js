import React from 'react';
import { Text } from 'spectacle';

export const Code = ({ children }) => {
    return <Text margin={50} bgColor='#2b2b2b' textColor='#e8be6a' padding={'15px 3px'}>{children}</Text>
}