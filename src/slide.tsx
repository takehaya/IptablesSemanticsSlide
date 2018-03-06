import * as React from "react";
import {
    Theme,
    Deck,
    Slide,
    Heading as SpectacleHeading,
    Image,
    Link as SpectacleLink,
    List,
    ListItem,
} from "spectacle";
import SpectacleImageSlide from "spectacle-image-slide";
import GithubForkRibbon from "react-github-fork-ribbon";
import { theme } from "spectacle-theme-solarized-light";

// import whoareyou from "../img/whoareyou.jpg";
import takemioIO from "../img/takemioIO.png";
// import kanjuden from "../img/kanjuden.png";
import question from "../img/question.jpg";
import work from "../img/work.jpg";
// import ubuntu from "../img/ubuntu.png";
// import dudrack from "../img/dudrack.png";
// import keymap from "../img/keymap.png";
// import i3wm from "../img/i3wm.png";
// import i3usage from "../img/i3usage.jpg";
// import chrome from "../img/chrome.png";
// import horobiyo from "../img/horobiyo.png";
// import rambox from "../img/rambox.png";
// import gnometerminal from "../img/gnometerminal.png";
// import zsh from "../img/zsh.png";
// import zshPronunciation from "../img/zsh-pronunciation.png";
// import enhancd from "../img/enhancd.png";
// import enhancdUsage from "../img/enhancd-usage.png";
// import vim from "../img/vim.svg";
// import neovim from "../img/neovim.svg";
// import neovimUsage from "../img/neovim-usage.png";
// import neovimQt from "../img/neovim-qt.png";
// import ezoe from "../img/ezoe.png";
// import dlang from "../img/dlang.png";
// import dman from "../img/dman.png";
// import nodejs from "../img/nodejs.svg";
// import react from "../img/react.png";
// import sinatra from "../img/sinatra.png";
// import spectacle from "../img/spectacle.png";

const Footer = () => (
    <div style={{
        position: "absolute",
        width: "100%",
        bottom: "20px",
        textAlign: "center",
    }}>
        <a
            style={{
                color: theme.screen.colors.tertiary,
                fontSize: 48,
                fontFamily: "monospace",
                textDecoration: "initial",
            }}
            href="//git.io/v7ZUX"
        >
            git.io/v7ZUX
        </a>
    </div>
);

const Link = (props: { href: string }) => (<SpectacleLink textColor="tertiary" {...props} />);

const ImageSlide = (props: { image: string, title?: string }) => (
    <SpectacleImageSlide
        {...props}
        titleProps={{
            textColor: "tertiary",
            caps: false,
        }}
    />
);

const Heading = (props: { fit?: boolean, size?: number, children?: any }) => (
    <SpectacleHeading {...props} textColor="tertiary" />
);

const thickenProgressBar = (initialTheme: Theme) => ({
    ...initialTheme,
    screen: {
        ...initialTheme.screen,
        progress: {
            ...initialTheme.screen.progress,
            bar: {
                ...initialTheme.screen.progress.bar,
                container: {
                    ...initialTheme.screen.progress.bar.container,
                    height: '16px',
                }
            },
        },
    },
});

export default () => (
    <div>
        <Deck theme={thickenProgressBar(theme)} transition={[]} transitionDuration={0} progress="bar">
            <Slide>
                <Heading fit>iptablesを意味論を用いて解析する</Heading>
            </Slide>
            <Slide>
                {/* <ImageSlide image={whoareyou} /> */}
            </Slide>
            <Slide>
                <Image src={takemioIO} width="36%" />
                <Heading>Hayasaka, Takeru</Heading>
                <List>
                    <ListItem>Twitter: <Link href="https://twitter.com/takemioIO">@takemioIO</Link></ListItem>
                    <ListItem>Github: <Link href="https://github.com/takehaya">takehaya</Link></ListItem>
                </List>
            </Slide>
            <Slide>
                <Heading>最近のやってること・マイブーム</Heading>
                <List>
                    <ListItem>プログラミング言語の意味論</ListItem>
                    <ListItem>infosec(SecHack365,CTF)</ListItem>
                    <ListItem>Ruby(インターン期間中にはじめました)</ListItem>
                    <ListItem>Esperanto</ListItem>
                    <ListItem>network <Link href="http://www.speedrun.com/run/emk6o4xz">36分36秒</Link></ListItem>
                </List>
                {/* <Image src={kanjuden} width="40%" /> */}
            </Slide>
            <Slide>
                <Heading>注意</Heading>
            </Slide>
            <Slide>
                <ImageSlide image={question} title="任意のタイミングで質問や議論OK" />
            </Slide>
            <Slide>
                <ImageSlide image={work} title="任意のタイミングで退席OK" />
            </Slide>
            {/* <Slide>
                <Heading>1. 目次</Heading>
                <List {...{ ordered: true }}>
                    <ListItem>目次</ListItem>
                    { contents.map(({ name }, i) => (<ListItem key={i}>{name}</ListItem>)) }
                </List>
            </Slide>
            {
                contents.map(({ name, bodies }, i) => [
                    <Slide>
                        <Heading>{i + 2}. {name}</Heading>
                    </Slide>,
                    bodies,
                ])
            } */}
        </Deck>
        <GithubForkRibbon href="https://github.com/youxkei/devenv-slide/" color="orange">Fork me on Github</GithubForkRibbon>
        <Footer />
    </div>
);