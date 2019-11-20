/* eslint-disable import/no-webpack-loader-syntax */
// Import React
import React from 'react';
import solsticeImage from './assets/solstice.png';
import { TAB_ORDER_EXAMPLE_URL } from './vars';
// intro
// why accessibility matters
// types of impairments
// wai
// wcag -> checklist & POUR
// Focus problems
//  Tab Order
// Semantics
//  Landmarks
// Aria - when great html is not enough


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
            <Slide bgImage={solsticeImage}/>
            <Slide bgColor='secondary'>
                <Heading size={1} textColor='tertiary' fit caps>
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
                    <Text textColor='tertiary'><Link href='https://webaim.org/' target='_blank'
                                                     rel="noopener noreferrer">WAI Checklist</Link></Text>
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
                    <Text>2.1 was standardized in Europe in September 2018</Text>
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
            {/* WCAG Perceivable */}
            <Slide>
                <Heading>Perceivable</Heading>
                Is the information presented in a format that the end-user can understand?
                <Notes>
                    All users must be able to perceive it in some way, using one or more of their senses.
                </Notes>
            </Slide>
            {/* WCAG Operable */}
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
            {/* WCAG Understandable */}
            <Slide>
                <Heading>Understandable</Heading>
                <Text>
                    Is the context of information and operations understandable?
                </Text>
            </Slide>
            {/* WCAG Robust */}
            <Slide>
                <Heading>Robust</Heading>
                <Text>
                    Are you using future-proof methods to ensure accessibility into the future?
                </Text>
            </Slide>
            {/* Techniques for Accessibility */}
            {/* Focus */}
            <Slide>
                <Heading>
                    Focus
                </Heading>
            </Slide>
            <Slide>
                <Text>
                    <Link href='https://webaim.org/standards/wcag/checklist#sc2.1.1'>
                        Guideline 2.1
                    </Link>
                    &nbsp;states that all functionality should be accessibile using only the keyboard
                </Text>
            </Slide>
            <Slide>
                {/* Make this look better */}
                <Heading size={3}>Understand Tab Order</Heading>
                <Text>Focusable by Default</Text>
                <Text>Ignored by Default</Text>
                <Text>Overriding Defaults</Text>
            </Slide>
            <Slide>
                {/*  Color these + content */}
                <Heading size={3}>Focusable by Default</Heading>
                <Heading size={6}>(Implicit Focus)</Heading>
                <Text>text fields, buttons, select lists</Text>
            </Slide>
            <Slide>
                {/*  Color these + content */}
                <Heading size={3}>Ignored by Default</Heading>
                <Text>divs, paragraphs, spans, etc. - they have no interaction</Text>
            </Slide>
            <Slide>
                {/*  Color these + content */}
                <Heading size={3}>Overriding Default</Heading>
                <Text>Display none - visibility hidden remove element from tab order</Text>
            </Slide>
            <Slide>
                {/*  Color these + content */}
                <Heading size={3}>Demo Time!</Heading>
                <Link href={TAB_ORDER_EXAMPLE_URL} target='_blank' rel='noopener noreferrer'>Click here for a
                    demo</Link>
            </Slide>
            {/* Built in Semantics */}
            <Slide>
                <Heading size={1}>Semantic HTML</Heading>
            </Slide>
            <Slide>
                <Text>Semantic HTML allows Assistive Technology (AT) to automatically pull context from a page when used
                    correctly.</Text>
            </Slide>
            <Slide>
                <Heading size={2}>Bad Semantics</Heading>
                <Text>
                    While poorly written code can cause problems for users who do not need
                    Assistive Technology, these bad practices can make it impossible for users
                    who rely on AT to use your site.
                </Text>
            </Slide>
            <Slide>
                <Heading size={2}>Div</Heading>
                <Text>
                    Despite being the most overused HTML element in existence,
                    a div has no semantics and should be used strictly for grouping
                    semantic tags for styling purposes only.
                </Text>
            </Slide>
            <Slide>
                <Heading size={2}>Span</Heading>
                <Text>
                    A span is very similar to a div in it's lack of semantics, but is used
                    primarily for grouping text-like fragments together in-line for styling.
                </Text>
                <p>ex: This is a span <span style={{color: 'green'}}>here</span></p>
            </Slide>
            <Slide>
                <Heading size={2}>Landmarks & Signposts</Heading>
                <Text>AT can easily navigate using only Landmarks when used correctly.</Text>
                <Text>Content outside of landmarks is referred to as being orphaned.</Text>
            </Slide>
            <Slide>
                <Heading size={2}>Landmarks</Heading>
            </Slide>
            <Slide>
                <Heading size={3}>Form</Heading>
                <Text>Input elements that can be edited and submitted</Text>
            </Slide>
            <Slide>
                <Heading size={3}>Table</Heading>
                <Text>Groups and displays data by row or column</Text>
            </Slide>
            <Slide>
                <Heading size={3}>Main</Heading>
                <Text>Primary content of page. Only one `main` landmark should exist per page</Text>
            </Slide>
            <Slide>
                <Heading size={3}>Nav</Heading>
                <Text>Defines navigation links</Text>
            </Slide>
            <Slide>
                <Heading size={3}>Article</Heading>
                <Text>Self-contained content<br/>Should make sense on its own</Text>
            </Slide>
            <Slide>
                <Heading size={3}>Section</Heading>
                <Text>Defines a grouping of content<br />Typically contains a header</Text>
            </Slide>
            <Slide>
                <Heading size={3}>Article vs Section</Heading>
                <Text>
                    No rules!<br/>
                </Text>
                <section style={{ position: 'absolute', bottom: '225px', left: 0, right: 0, display: 'flex', fontSize: '20px'}}>
                    <article style={{ flex: 1 }}>
                        <code>
                            &lt;Article&gt;<br />
                            <span style={{ marginLeft: '75px' }}>&lt;Article/&gt;</span><br />
                            &lt;/Article&gt;<br />
                        </code>
                    </article>
                    <article style={{ flex: 1 }}>
                        <code>
                            &lt;Article&gt;<br />
                            <span style={{ marginLeft: '75px' }}>&lt;Section/&gt;</span><br />
                            &lt;/Article&gt;<br />
                        </code>
                    </article>
                    <article style={{ flex: 1 }}>
                        <code>
                            &lt;Section&gt;<br />
                            <span style={{ marginLeft: '75px' }}>&lt;Article/&gt;</span><br />
                            &lt;/Section&gt;<br />
                        </code>
                    </article>
                    <article style={{ flex: 1 }}>
                        <code>
                            &lt;Section&gt;<br />
                            <span style={{ marginLeft: '75px' }}>&lt;Section/&gt;</span><br />
                            &lt;/Section&gt;<br />
                        </code>
                    </article>
                </section>
            </Slide>
            <Slide>
                <Heading size={3}>Footer</Heading>
                <Text>Typically contains author, copyright, ToU, contact info, etc</Text>
            </Slide>
            <Slide>
                <Heading size={3}>Header</Heading>
                <Text>Contains introductory content</Text>
            </Slide>
            <Slide>
                <Heading size={3}>Aside</Heading>
                <Text>Defines content related to `main`</Text>
            </Slide>
            <Slide>
                <Heading size={2}>Text Formatting</Heading>
                <Text>p, h1-h6, blockquote, ul</Text>
            </Slide>
            {/* Extended Semantics with Aria */}
            <Slide>
                <Heading>Extending Semantics with WAI-ARIA</Heading>
            </Slide>
            {/* Aria */}
            {/* TODO - arya Game of Thrones Meme */}
            <Slide bgColor='secondary'>
                <Heading size={1} textColor='tertiary'>
                    Aria Meme here
                </Heading>
            </Slide>
            <Slide>
                <Heading margin={40}>aria-label</Heading>
                <Text>Aria-label's completely override default screen reader output and reads the aria-Label value instead.</Text>
                <Code>{`<button aria-label='Click me!'>Hello</button>`}</Code>
                <Text margin={50} textColor='tertiary'>{`In this example, a screen reader would read aloud ' Click me! ',  rather than ' Hello '.`}</Text>
            </Slide>
            <Slide>
                <Heading>Aria Labeledby</Heading>
                <Text>aria-labeledby is similar to aria-label, but is used to associate another element as the descriptor for the labeledby element.</Text>
            </Slide>
            <Slide>
                <Heading>Aria Forms</Heading>
                <Text>Aria Required, Aria invalid TODO</Text>
            </Slide>
            <Slide>
                <Heading>Aria Busy</Heading>
                <Text> TODO </Text>
            </Slide>
            <Slide>
                <Heading>Aria Progress Bar</Heading>
                <Text>Aria-valuenow, valuemin, valuemax TODO</Text>
            </Slide>
            <Slide>
                <Heading>Aria Hidden</Heading>
                <Text>TODO </Text>
            </Slide>
            {/* Aria Role Equivalents */}
            <Slide>
                <Heading>Aria Roles</Heading>
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
                <Heading size={6}>Do browsers support Aria?</Heading>
                Global support is roughly 95% according to <Link style={{fontStyle: 'none', color: 'inherit'}}
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