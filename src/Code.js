import React from 'react';
import { Text } from 'spectacle';

export const Code = ({ children, margin = 50 }) => {
    return <Text margin={margin} bgColor='#2b2b2b' textColor='#e8be6a' padding={'15px 3px'}>{children}</Text>
}