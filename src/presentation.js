/* eslint-disable import/no-webpack-loader-syntax */
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
  Notes,
  Layout,
  Fill,
  Fit,
  // CodePane,
  ComponentPlayground,
  Table,
  TableHeader,
  TableHeaderItem,
  TableBody,
  TableRow,
  TableItem,
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
        <Slide bgColor="primary" transition={['none']}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Web A11y 101
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Aria && WAI && WCAG 2.0h my
          </Text>
        </Slide>
        <Slide bgColor='secondary'>
          <Heading size={1} textColor='tertiary' fit caps>
            WTF*
          </Heading>
          <Text textColor='primary' textSize='16px'>
            *What the Frontend
          </Text>
        </Slide>
        {/* Motivation */}
        <Slide bgColor='tertiary'>
          <BlockQuote>
            <Quote>For many people, technology makes things easier. For people with disabilities, technology makes things possible. </Quote>
            <Cite textColor='secondary'>Mozilla Developer Network</Cite>
          </BlockQuote>
        </Slide> 
        {/* Types of Impairments */}
        <Slide bgColor='secondary'>
          <Appear>
            <Heading size={5} textColor='primary'>Impairments</Heading>
          </Appear>
          <Layout>
            <Fill>
              <Appear>
                <Heading
                  size={4}
                  margin={10}
                  textColor='tertiary'
                >
                  Duration
                </Heading>
              </Appear>
              <Appear>
                <Fit>
                  <Text textColor='primary' margin={20}>Temporary</Text>
                  <Text textColor='primary' margin={20}>Situational</Text>
                  <Text textColor='primary' margin={20}>Permenant</Text>
                </Fit>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Heading
                  size={4}
                  margin={10}
                  textColor='tertiary'
                >
                  Category
                </Heading>
              </Appear>
              <Appear>
                <Fit>
                  <Text textColor='primary' margin={20}>Visual</Text>
                  <Text textColor='primary' margin={20}>Motor</Text>
                  <Text textColor='primary' margin={20}>Hearing</Text>
                  <Text textColor='primary' margin={20}>Cognitive</Text>
                </Fit>
              </Appear>
            </Fill>
          </Layout>
        </Slide> 
        {/* WAI */}
        <Slide bgColor='primary'>
          <Heading size={1} textColor='secondary'>
            WAI
          </Heading>
          <List textColor='tertiary'>    
          <Appear>
            <ListItem textColor='tertiary'><a href='https://webaim.org/' target='_blank' rel="noopener noreferrer">WAI Checklist</a></ListItem>
          </Appear>
          <Appear>
            <ListItem></ListItem>
          </Appear>
          <Appear>
            <ListItem> </ListItem>
          </Appear>
          </List>
        </Slide>
        {/* WCAG 2.0 */}
        <Slide bgColor='tertiary'>
          <Heading size={1} textColor='primary'>
            WCAG 2.0
          </Heading>
          2.1 was standardized in Europe in September 2018
        </Slide>
        {/* Perceivable */}
        <Slide>
          <Heading>Perceivable</Heading>
          Is the information presented in a format that the end-user can understand?
          <Notes>
            All users must be able to perceive it in some way, using one or more of their senses.
          </Notes>
        </Slide>
        {/* Operable */}
        <Slide>
          <Heading>Operable</Heading>
          <Text>
            Can the user operate the interface?
          </Text>
          <Notes>
            Buttons
            Links
            Modals
            etc.
            Hover without a mouse?
          </Notes>
        </Slide>
        {/* Understandable */}
        <Slide>
          <Heading>Understandable</Heading>
          <Text>
            Is the context of information and operations understandable?
          </Text>
        </Slide>
        {/* Robust */}
        <Slide>
          <Heading>Robust</Heading>
          <Text>
            Are you using future-proof methods to ensure accessibility into the future?
          </Text>
        </Slide>
        {/* Techniques for Accessibility */}

        {/* Focus */}
        <Slide>
          <Text>
            <a href='https://webaim.org/standards/wcag/checklist#sc2.1.1'>
              Guideline 2.1
            </a>
            &nbsp;states that all functionality should be accessibile using only the keyboard
          </Text>
        </Slide>
        <Slide>
          <Text>Understand tab-order</Text>
          <Text>Implicit focus - text fields, buttons, select lists</Text>
          <Text>Not - divs, paragraphs, spans, etc. - they have no interaction</Text>
          <Text>Display none - visibility hidden remove element from tab order</Text>
        </Slide>
        {/* Make example for form thats keyboard accessible */}
        {/* Built in Semantics */}

        {/* Extended Semantics with Aria */}
        
        
        
        
        
        
        
        
        
        <Slide>
          <List>
            <ListItem>Accessible-by-default components</ListItem>
          </List>
        </Slide>
        
        
        
        
        
        
        {/* EXAMPLES */}
        <Slide>
          <Heading>Forms</Heading>
          <a href='https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/forms/Basic_form_hints'>basic forms</a>
          <a href='https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/forms/alerts'>Adding Alerts</a>
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
        {/* Aria Landmarks */}
        <Slide>
          <Heading>Landmarks & Signposts</Heading>
          <Text>AT can easily navigate using only Landmarks when used correctly</Text>
          <Text>Content outside of landmarks is referred to as being orphaned</Text>
        </Slide>
        {/* Aria Role Equivalents */}
        <Slide>
        <Table>
            <TableHeader>
              <TableHeaderItem>Aria Role</TableHeaderItem>
              <TableHeaderItem>HTML 5 Equivalent</TableHeaderItem>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>banner</TableItem>
                <TableItem>none</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>complementary</TableItem>
                <TableItem>aside</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>contentInfo</TableItem>
                <TableItem>none</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>form</TableItem>
                <TableItem>form / div</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>main</TableItem>
                <TableItem>main</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>navigation</TableItem>
                <TableItem>nav</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>search</TableItem>
                <TableItem>none</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        {/* Aria Support */}
        <Slide>
        <Heading size={6}>Do browsers support Aria???</Heading>
          Global support is roughly 95% according to <a style={{ fontStyle: 'none', color: 'inherit' }} href='https://caniuse.com/#feat=wai-aria'>caniuse.com</a>
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
        
      </Deck>
    );
}
