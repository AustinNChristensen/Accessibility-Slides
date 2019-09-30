// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  // CodePane,
  ComponentPlayground,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export const Presentation = () => {
    return (
      <Deck
        // slide, zoom, fade, spin
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        controls={false}
        progress='pacman'
        showFullscreenControl={false}
      >
      {/* Title */}
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Web Accessibility 101
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Aria && WAI && WCAG 2.0h my
          </Text>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading size={1} textColor='tertiary' fit caps>
            WTF
          </Heading>
        </Slide>
        {/* Definitions */}
        <Slide bgColor='tertiary'>
          <Appear>
            <Text margin="40px 0 0" textColor="secondary" bold>
              Aria -> Accessible Rich Internet Applications
            </Text>
          </Appear>
          <Appear>
            <Text margin="25px 0 0" textColor="secondary" bold>
              WAI -> Web Accessibility Initiative
            </Text>
          </Appear>
          <Appear>
            <Text margin="25px 0 0" textColor="secondary" bold>
              WCAG 2.0 -> Web Content Accessibility Guidelines (2.0)
            </Text>
          </Appear>
        </Slide>
        {/* Aria */}
        <Slide bgColor='secondary'>
          <Heading size={1} textColor='tertiary'>
            Aria
          </Heading>
          <List textColor='primary'>    
          <Appear>
            <ListItem>
              aria-label
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              aria-hidden
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              aria-role
            </ListItem>
          </Appear>
          </List>
        </Slide>

        {/* WAI */}
        <Slide bgColor='primary'>
          <Heading size={1} textColor='secondary'>
            WAI
          </Heading>
        </Slide>
        {/* WCAG 2.0 */}
        <Slide bgColor='tertiary'>
          <Heading size={1} textColor='primary'>
            WCAG 2.0
          </Heading>
        </Slide>
        {/* Playground Example Attempt */}
        <Slide bgColor='tertiary'>
          <ComponentPlayground lang='jsx' margin="20px auto" overflow="overflow" />
        </Slide>
        {/* Heading Examples */}
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        {/* List Example */}
        <Slide bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        {/* Quote Example */}
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
}
