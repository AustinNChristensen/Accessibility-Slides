/* eslint-disable import/no-webpack-loader-syntax */
// Import React
import React from 'react';
import { TAB_ORDER_EXAMPLE_URL } from './vars';

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
    Link,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import { Code } from './Code';

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
        primary: 'Lato',
        secondary: 'Lato',
    }
);

// todo - notes -> mark slides per person
// todo appear affects
// todo - add the wave
// todo more styles

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
            <Slide>
                <div style={{position: 'absolute', left: 0, right: 0, top:0, bottom: 0}}>
                    <div style={{ width: '100%', height: '100%', position: 'relative'}}>
                        <video autoPlay loop width={'100%'}>
                            <source src={require('./assets/CoverVideo.mp4')}
                                type="video/mp4" />
                        </video>
                    </div>
                </div>
            </Slide>
            <Slide bgColor='secondary'>
                <Heading textColor='tertiary' fit caps>
                    WTF*
                </Heading>
                <Text textColor='primary' textSize='16px'>
                    * What the Frontend
                </Text>
            </Slide>
            {/* Motivation */}
            <Slide bgColor='tertiary'>
                <BlockQuote>
                    <Quote>For many people, technology makes things easier. For people with disabilities, technology
                        makes things possible. </Quote>
                    <Cite textColor='secondary'>Mozilla Developer Network</Cite>
                </BlockQuote>
            </Slide>
            {/* WAI */}
            <Slide bgColor='primary'>
                <Heading size={1} textColor='secondary'>
                    W3C & WAI
                </Heading>
                <Appear>
                    <Text margin={15}><Text textColor='tertiary'>The World Wide Web Consortium (W3C)</Text> develops
                        standards for the web: HTML, CSS, etc.</Text>
                </Appear>
                <Appear>
                    <Text margin={15}><Text textColor='tertiary'>The Web Accessibility Initiative (WAI)</Text> is a
                        never-ending project, led by the W3C, to create guidelines and support materials for
                        implementing accessibility.</Text>
                </Appear>
                <Appear>
                    {/* Some type of checklist image??? */}
                    <Text textColor='tertiary'>
                        <Link href='https://webaim.org/' target='_blank' rel="noopener noreferrer">WAI Checklist</Link>
                    </Text>
                </Appear>
            </Slide>
            {/* WCAG 2.0 Definition */}
            <Slide bgColor='tertiary'>
                <Heading size={1} textColor='primary'>
                    WCAG 2.1
                </Heading>
                <Appear>
                    <Text margin={30}>Web Content Accessibility Guidelines</Text>
                </Appear>
                <Appear>
                    <Text margin={10}>2.1 was standardized in Europe in September 2018</Text>
                </Appear>
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
                                <Text textColor='primary' margin={20}>Permanent</Text>
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
                <Notes>
                    <table>
                        <tr><th></th><th>Temporary</th><th>Situational</th><th>Permanent</th></tr>
                        <tr><th>Visual</th><td>Cataracts</td><td>Distracted Driver</td><td>Blind</td></tr>
                        <tr><th>Motor</th><td>Arm Injury</td><td>Holding Baby</td><td>One Arm</td></tr>
                        <tr><th>Hearing</th><td>Ear Infection</td><td>Bartender</td><td>Deaf</td></tr>
                        <tr><th>Cognitive</th><td>Laryngitis</td><td>Heavy Accent</td><td>Non-Verbal</td></tr>
                    </table>
                </Notes>
            </Slide>
            {/* TODO - holding a baby is a situational impairment */}
            {/* WCAG Perceivable */}
            <Slide>
                <Heading textColor='tertiary'>Perceivable</Heading>
                <Appear>
                    <Text margin={15}>
                        Is the information presented in a format that the end-user can understand?
                    </Text>
                </Appear>
                <Notes>
                    All users must be able to perceive it in some way, using one or more of their senses.
                </Notes>
            </Slide>
            {/* WCAG Operable */}
            <Slide>
                <Heading textColor='tertiary'>Operable</Heading>
                <Appear>
                    <Text margin={15}>
                        Can the user operate the interface?
                    </Text>
                </Appear>
                <Notes>
                    Buttons,
                    Links,
                    Modals,
                    etc.
                    Are states restricted to hovering?
                </Notes>
            </Slide>
            {/* WCAG Understandable */}
            <Slide>
                <Heading textColor='tertiary'>Understandable</Heading>
                <Appear>
                    <Text margin={15}>
                        Is the context of information and operations understandable?
                    </Text>
                </Appear>
                <Notes>
                    Many government standards require language to be structured for a 6th grade reading level
                </Notes>
            </Slide>
            {/* WCAG Robust */}
            <Slide>
                <Heading textColor='tertiary'>Robust</Heading>
                <Appear>
                    <Text margin={15}>
                        Are you using future-proof methods to ensure accessibility into the future?
                    </Text>
                </Appear>
                <Notes>
                    Ecosystem in tech is constantly changing, as are laws.
                    Canada has strict laws around accessibility,
                    should be followed as a gold standard
                </Notes>
            </Slide>
            {/* Techniques for Accessibility */}
            <Slide bgColor='tertiary'>
                <Heading textColor='secondary'>Techniques for Accessibility</Heading>
            </Slide>
            {/* Focus */}
            <Slide>
                <Heading textColor='tertiary'>
                    Managing Focus
                </Heading>
                <Appear>
                    <Text margin={15}>
                        <Link href='https://webaim.org/standards/wcag/checklist#sc2.1.1'>
                            Guideline 2.1
                        </Link>
                        &nbsp;states that all functionality should be accessible using only the keyboard
                    </Text>
                </Appear>
            </Slide>
            <Slide bgColor='secondary'>
                <Heading textColor='tertiary' size={4} margin={10}>Understand Tab Order</Heading>
                <Appear>
                    <Text textColor='primary' margin={25}>Focusable by Default</Text>
                </Appear>
                <Appear>
                    <Text textColor='primary' margin={25}>Ignored by Default</Text>
                </Appear>
                <Appear>
                    <Text textColor='primary' margin={25}>Overriding Defaults</Text>
                </Appear>
            </Slide>
            <Slide bgColor='secondary'>
                <Heading textColor='tertiary' size={4} margin={10}>Focusable by Default</Heading>
                <Appear>
                    <Heading size={6} textColor='tertiary'>(Implicit Focus)</Heading>
                </Appear>
                <Appear>
                    <Text textColor='primary' margin={25}>inputs</Text>
                </Appear>
                <Appear>
                    <Text textColor='primary' margin={25}>buttons</Text>
                </Appear>
                <Appear>
                    <Text textColor='primary' margin={25}>select tags</Text>
                </Appear>
            </Slide>
            <Slide bgColor='secondary'>
                <Heading textColor='tertiary' size={4} margin={10}>Ignored by Default</Heading>
                <Appear>
                    <Text textColor='primary' margin={25}>divs / spans</Text>
                </Appear>
                <Appear>
                    <Text textColor='primary' margin={25}>paragraphs</Text>
                </Appear>
                <Appear>
                    <Text textColor='primary' margin={25}>sections / articles / header / footer</Text>
                </Appear>
            </Slide>

            <Slide bgColor='secondary'>
                <Heading textColor='tertiary' size={4} margin={10}>Overriding Defaults</Heading>
                <Appear>
                    <div>
                        <Text textColor='primary' margin={25}>Display: none</Text>
                        <Text textColor='primary' margin={25}>visibility: hidden</Text>
                    </div>
                </Appear>
                <Notes>
                    This will remove the element from the tab order and hide it visibly, but it will be in the DOM
                </Notes>
            </Slide>
            <Slide>
                <Heading textColor='tertiary' size={3}>Demo Time!</Heading>
                <Link href={TAB_ORDER_EXAMPLE_URL} target='_blank' rel='noopener noreferrer'>
                    Click here for a demo
                </Link>
            </Slide>
            {/* Built in Semantics */}
            <Slide>
                <Heading textColor='tertiary' size={1}>Semantic HTML</Heading>
            </Slide>
            <Slide bgColor='secondary'>
                <Text margin={25} textColor='tertiary'>
                    Semantic HTML allows Assistive Technology (AT) to automatically pull context from a page when used
                    correctly.
                </Text>
            </Slide>
            <Slide bgColor='tertiary'>
                <Heading textColor='primary' size={2}>Improper Semantics</Heading>
                <Appear>
                    <Text margin={25}>
                        While poorly written code can cause problems for users who do not need
                        Assistive Technology, these bad practices can make it impossible for users
                        who rely on AT to use your site.
                    </Text>
                </Appear>
            </Slide>
            <Slide bgColor='tertiary'>
                <Heading textColor='primary' size={2}>Div</Heading>
                <Appear>
                    <Text margin={25}>
                        Despite being the most overused HTML element in existence,
                        a div has no semantics and should be used strictly for grouping
                        semantic tags for styling purposes only.
                    </Text>
                </Appear>
            </Slide>

            <Slide bgColor='tertiary'>
                <Heading textColor='primary' size={2}>Span</Heading>
                <Appear>
                    <Text margin={25}>
                        A span is very similar to a div in it's lack of semantics, but is used
                        primarily for grouping text-like fragments together in-line for styling.
                    </Text>
                </Appear>
                <Appear>
                    <p>ex: This is a span <span style={{ color: 'yellow' }}>here</span></p>
                </Appear>
            </Slide>

            <Slide bgColor='secondary'>
                <Heading textColor='tertiary' size={2}>Landmarks & Signposts</Heading>
                <Appear>
                    <Text margin={25} textColor='primary'>
                        AT can easily navigate using only Landmarks when used correctly.
                    </Text>
                </Appear>
                <Appear>
                    <Text margin={25} textColor='primary'>
                        Content outside of landmarks is referred to as being orphaned.
                    </Text>
                </Appear>
            </Slide>
            <Slide>
                <Heading textColor='tertiary' size={2}>Landmarks</Heading>
            </Slide>

            <Slide bgColor='tertiary'>
                <Heading textColor='primary' size={2}>Form</Heading>
                <Appear>
                    <Text margin={25}>
                        Container for input elements that can be edited and submitted
                    </Text>
                </Appear>
            </Slide>

            <Slide bgColor='tertiary'>
                <Heading textColor='primary' size={2}>Table</Heading>
                <Appear>
                    <Text margin={25}>
                        Groups and displays data by row and column
                    </Text>
                </Appear>
            </Slide>

            <Slide bgColor='tertiary'>
                <Heading textColor='primary' size={2}>Main</Heading>
                <Appear>
                    <Text margin={25}>
                        Primary content of a page
                    </Text>
                </Appear>
                <Appear>
                    <Text margin={25}>
                        Only one is allowed to exist per page
                    </Text>
                </Appear>
            </Slide>

            <Slide bgColor='tertiary'>
                <Heading textColor='primary' size={2}>Nav</Heading>
                <Appear>
                    <Text margin={25}>
                        Container to define site navigation links
                    </Text>
                </Appear>
            </Slide>

            <Slide bgColor='tertiary'>
                <Heading textColor='primary' size={2}>Article</Heading>
                <Appear>
                    <Text margin={25}>
                        Content within is self contained
                    </Text>
                </Appear>
                <Appear>
                    <Text margin={25}>
                        Should make sense on its own
                    </Text>
                </Appear>
            </Slide>

            <Slide bgColor='tertiary'>
                <Heading textColor='primary' size={2}>Section</Heading>
                <Appear>
                    <Text margin={25}>
                        Defines a group of content
                    </Text>
                </Appear>
                <Appear>
                    <Text margin={25}>
                        Typically will have its own header
                    </Text>
                </Appear>
            </Slide>

            {/* TODO - fix this slide */}
            <Slide bgColor='tertiary'>
                <Heading textColor='primary' size={2}>Article vs. Section</Heading>
                <Appear>
                    <Text margin={25}>
                        No Offical Rules!
                    </Text>
                </Appear>
                <Appear>
                    <div>
                        <Layout>
                            <Fill>
                                <code>
                                    &lt;Article&gt;<br />
                                    <span style={{ marginLeft: '75px' }}>&lt;Article/&gt;</span><br />
                                    &lt;/Article&gt;<br />
                                </code>
                            </Fill>
                            <Fill>
                                <code>
                                    &lt;Article&gt;<br />
                                    <span style={{ marginLeft: '75px' }}>&lt;Section/&gt;</span><br />
                                    &lt;/Article&gt;<br />
                                </code>
                            </Fill>
                            <Fill>
                                <code>
                                    &lt;Section&gt;<br />
                                    <span style={{ marginLeft: '75px' }}>&lt;Article/&gt;</span><br />
                                    &lt;/Section&gt;<br />
                                </code>
                            </Fill>
                            <Fill>
                                <code>
                                    &lt;Section&gt;<br />
                                    <span style={{ marginLeft: '75px' }}>&lt;Section/&gt;</span><br />
                                    &lt;/Section&gt;<br />
                                </code>
                            </Fill>
                        </Layout>

                    </div>
                </Appear>
            </Slide>


            <Slide bgColor='tertiary'>
                <Heading textColor='primary' size={2}>Footer</Heading>
                <Appear>
                    <Text margin={25}>
                        Author
                    </Text>
                </Appear>
                <Appear>
                    <Text margin={25}>
                        Copyright
                    </Text>
                </Appear>

                <Appear>
                    <Text margin={25}>
                        Terms of Use
                    </Text>
                </Appear>

                <Appear>
                    <Text margin={25}>
                        Contact Info
                    </Text>
                </Appear>
            </Slide>

            <Slide bgColor='tertiary'>
                <Heading textColor='primary' size={2}>Header</Heading>
                <Appear>
                    <Text margin={25}>
                        Contains introductory content
                    </Text>
                </Appear>
                <Appear>
                    <Text margin={25}>
                        Usually contains the nav but it doesn't have to
                    </Text>
                </Appear>
            </Slide>

            <Slide bgColor='tertiary'>
                <Heading textColor='primary' size={2}>Aside</Heading>
                <Appear>
                    <Text margin={25}>
                        Defines content related to, but separate from, main
                    </Text>
                </Appear>
                <Appear>
                    <Text margin={25}>
                        Should make sense on its own
                    </Text>
                </Appear>
            </Slide>

            <Slide bgColor='tertiary'>
                <Heading textColor='primary' size={2}>Text Formatting Tags</Heading>
                <Appear>
                    <Text margin={25}>
                        p
                    </Text>
                </Appear>
                <Appear>
                    <Text margin={25}>
                        H1 - H6
                    </Text>
                </Appear>
                <Appear>
                    <Text margin={25}>
                        Blockquotes
                    </Text>
                </Appear>
                <Appear>
                    <Text margin={25}>
                        Unordered Lists (UL)
                    </Text>
                </Appear>
            </Slide>
            {/* Extended Semantics with Aria */}
            <Slide>
                <Heading textColor='tertiary'>Extending Semantics with WAI-ARIA</Heading>
            </Slide>
            {/* Aria */}
            <Slide bgColor='secondary' style={{ position: 'relative'}}>
                <Heading textColor='tertiary'>
                    Arya Stark???
                </Heading>
                <Appear>
                    <video autoPlay loop style={{ height: '100%', position: 'absolute', top: '0', left: '30%', right: '30%' }}>
                        <source src="https://media.giphy.com/media/WsFsLN9BNYYOZ0jxUM/giphy.mp4"
                                type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;"/>
                    </video>
                </Appear>
            </Slide>
            <Slide>
                <Heading>Accessible Rich Internet Applications</Heading>
                <Notes>
                    Attributes used to make web content and applications more accessible to people with disabilities
                </Notes>
            </Slide>
            <Slide>
                <Heading textColor='tertiary'>aria-label</Heading>
                <Text margin={10}>Aria-label completely overrides default screen reader output and reads the aria-Label
                    value in its
                    place.</Text>
                <Code>{`<button aria-label='Click me!'>Hello</button>`}</Code>
                <Text margin={50}
                      textColor='tertiary'>{`In this example, a screen reader would read aloud ' Click me! ',  rather than ' Hello '.`}</Text>
            </Slide>
            <Slide>
                <Heading textColor='tertiary'>Aria Labelledby</Heading>
                <Text margin={10}>
                    aria-labelledby is used to associate another element, using an id, as the descriptor
                    for the labelled element.
                </Text>
                <Code margin={0}>{`<button aria-labelledby='description'>Hello</button>`}</Code>
                <Code margin={4}>{`<p id='description'>Click this button to learn more</p>`}</Code>
                <Text
                    textColor='tertiary'>{`In this case, a screen reader would read aloud ' Hello, Click this button to learn more '.`}
                </Text>
            </Slide>
            <Slide>
                <Heading textColor='tertiary'>Aria Live</Heading>
                <Text margin={10}>aria-live notifies screen readers that updates to this dom node should be read to the
                    user</Text>
                <Code>{`<p aria-live='polite' />`}</Code>
                <Code>{`<p aria-live='assertive' />`}</Code>
            </Slide>
            <Slide>
                <Heading textColor='tertiary'>Aria Busy</Heading>
                <Text margin={10}>aria-busy explains to a user that the node and / or its subtree is in the process of
                    updating.</Text>
                <Code>{`<section aria-busy='true'>Loading...</section>`}</Code>
            </Slide>
            <Slide>
                <Heading textColor='tertiary'>Aria Hidden</Heading>
                <Text margin={10}>aria-hidden hides the node element entirely from the Accessibility Tree</Text>
                <Code>{`<img aria-hidden='true' />`}</Code>
            </Slide>
            <Slide>
                <Heading textColor='tertiary'>Aria Forms</Heading>
                <Layout>
                    <Fill>
                        <Fit>
                            <Appear>
                                <Text margin={20}>aria-required</Text>
                            </Appear>
                            <Appear>
                                <Text margin={20}>aria-invalid</Text>
                            </Appear>
                            <Appear>
                                <Text margin={20}>aria-checked</Text>
                            </Appear>
                        </Fit>
                    </Fill>
                </Layout>
            </Slide>
            <Slide>
                <Heading textColor='tertiary'>Aria Progress Bar</Heading>
                <Layout>
                    <Fill>
                        <Fit>
                            <Appear>
                                <Text margin={20}>aria-valuenow</Text>
                            </Appear>
                            <Appear>
                                <Text margin={20}>aria-valuemax</Text>
                            </Appear>
                            <Appear>
                                <Text margin={20}>aria-valuemin</Text>
                            </Appear>
                        </Fit>
                    </Fill>
                </Layout>
            </Slide>
            {/* Aria Role Equivalents */}
            <Slide>
                <Heading textColor='tertiary'>Aria Roles</Heading>
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
                <Heading textColor='tertiary' size={6}>Do browsers support Aria?</Heading>
                Global support is roughly 95% according to <Link style={{ fontStyle: 'none', color: 'inherit' }}
                                                                 href='https://caniuse.com/#feat=wai-aria'>caniuse.com</Link>
            </Slide>
            <Slide>
                <List>
                    <ListItem>Accessible-by-default components</ListItem>
                </List>
            </Slide>
            {/* Playground Example Attempt */}
            <Slide bgColor='tertiary'>
                <ComponentPlayground lang='jsx' margin="20px auto" overflow="overflow"/>
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
};