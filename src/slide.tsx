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

const whoareyou = require('../img/whoareyou.jpg');
const takemioio = require('../img/takemioIO.jpg');
const quesion = require('../img/quesion.jpg');
const work = require('../img/work.jpg');
const thinkingface = require('../img/thinkingface.png');
const min_deno = require("../img/min-de.png");
const min_de_cal = require("../img/min-de-cal.png");
const ex_nati = require("../img/ex_nati.png");
const lambda_lang = require("../img/lambda-lang.png");
const eval_semantics = require("../img/eval-semantics.png");
const type_eval = require("../img/type-eval.png");
const type_set = require("../img/type-set.png");
const eval_semantics_operaters = require("../img/eval-semantics-operaters.png");
const iptables_semantics = require("../img/iptables_semantices.gif");
const simple_fw = require("../img/simple-fw.png");
const ex_iptables_image = require("../img/ex-iptables-image.png");
const iptables_data_taple = require("../img/iptables-datas-taple.png");
const iptables_select_data = require("../img/iptables-select-data.png");

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


const contents = [
    { name: "目的", bodies: [
        <Slide>
            <Heading size={3}>意味論に</Heading>
            <Heading size={3}>ついてちょっぴり知ってもらう</Heading>
        </Slide>,
    ] },
    {name:"意味論とは", bodies: [
        <Slide>
            <Heading size={4}>プログラミング言語の意味と計算モデルに関する分野である</Heading>
            <Heading size={4}>形式的なものは、プログラミング言語の形式意味論とも呼ばれる。</Heading>
            <Heading size={4}>標準規格等では形式的でなく意味論を与えているものも多い。by wikipdia</Heading>
        </Slide>,
        <Slide>
            <Image src={thinkingface} width="60%" />
        </Slide>,
        <Slide>
            <Heading size={3}>ざっくり言うと</Heading>
        </Slide>,
        <Slide>
                <Heading size={3}>計算モデルに意味を定義すること</Heading>
        </Slide>,
        <Slide>
                <Heading size={3}>何が嬉しいのか</Heading>
                <List>
                    <ListItem>プログラムの正しさを形式的に検証</ListItem>
                    <ListItem>定義が厳密で、曖昧さがないとほかへの応用時にモジュールごとに担保できる</ListItem>
                    <ListItem>プログラムやモデルの推論・解析に役立つ</ListItem>
                </List>
        </Slide>,
        <Slide>
                <Heading size={3}>定義手法</Heading>
                <List>
                    <ListItem>表示的意味論: プログラムの各要素を、何らかの数学的要素に対応付ける</ListItem>
                    <ListItem>操作的意味論: プログラムの動作を記述</ListItem>
                    <ListItem>公理的意味論: プログラムが表している(数学的な)ものを記述</ListItem>
                </List>
        </Slide>,
        <Slide>
            <Heading size={3}>表示的意味論</Heading>
                <List>
                    <ListItem>構文構成要素ごとに意味を定義</ListItem>
                    <Image src={min_deno} width="60%" />
                    <Image src={min_de_cal} width="60%" />         
                </List>
        </Slide>,
        <Slide>
                <Heading size={3}>操作的意味論</Heading>
                <List>
                    <ListItem>small-step semantics (structural operational semantics)</ListItem>
                    <ListItem>big-step semantics (natural semantics)</ListItem>
                    <ListItem>abstract machine semantics</ListItem>
                </List>
        </Slide>,
        <Slide>
                <Heading size={3}>big-step semantics</Heading>
                <Image src={ex_nati} width="70%" />
        </Slide>,
        <Slide>
                <Heading size={3}>公理的意味論</Heading>
                <List>
                    <ListItem>様相論理,直観論理とかを用いた意味づけ</ListItem>
                    <ListItem>気になった人は調べてね</ListItem>
                </List>
        </Slide>
    ]},
    {name:"プログラミング言語を定義してみる", bodies: [
    <Slide>
        <Heading size={3}>言語定義</Heading>
        <Image src={lambda_lang} width="90%" />
    </Slide>,
    <Slide>
        <Heading size={3}>型集合の定義</Heading>
        <Image src={type_set} width="90%" />
        <ListItem>今回は型システム規則を省略します:)</ListItem>
    </Slide>,
    <Slide>
        <Heading size={3}>評価定義</Heading>
        <List>
            <ListItem>静的型付け評価を</ListItem>
            <Image src={type_eval} width="40%" />
            <ListItem>とするとき、式eの評価を</ListItem>
            <Image src={eval_semantics} width="40%" />
            <ListItem>E:実行時環境,e:式,t:型,v:値</ListItem>
        </List>
    </Slide>,
    <Slide>
      <Heading size={3}>評価定義</Heading>
      <List>
          <ListItem>静的型付け評価を</ListItem>
          <Image src={eval_semantics_operaters} width="60%" />
          <ListItem>ここで，Cls(E, x, e)は環境がEであるときに定義された関数fn x=>eを表す値,関数閉包と呼ぶ</ListItem>
      </List>
    </Slide>,
    <Slide>
        <List>
        <Heading size={3}>評価の操作的意味論</Heading>
            <Image src={eval_semantics} width="40%" />
        </List>
    </Slide>,
    <Slide>
        <List>
            <Image src={ex_nati} width="90%" />
        </List>
    </Slide>,
    <Slide>
         <Heading size={4}>無事プログラミング言語を定義できました！！！🎉🎉🎉</Heading>
         <Heading size={4}>あとは処理系を書くか,みんなが処理系になるだけですね。</Heading>
     </Slide>,
     <Slide>
        <Heading size={3}>でもこれってプログラミング言語だけしか使えないんだろうか。。。</Heading>
    </Slide>,
    <Slide>
         <Heading size={3}>他にもやってみた！</Heading>
     </Slide>
    ]},
    {name:"iptablesに意味付けをしてみる", bodies: [
        <Slide>
            <Heading size={3}>iptablesとは</Heading>
            <List>
                <ListItem>linuxとかで使われる組み込み済みのファイヤーウォール</ListItem>
                <ListItem>iptables [-t テーブル] コマンド [マッチ] [ターゲット/ジャンプ]という形式で書く</ListItem>
                <ListItem>例)tcp接続の受信データを破棄するというルールを追加する</ListItem>
                <ListItem>iptables -A INPUT -p tcp -j DROP</ListItem>
            </List>
        </Slide>,
        <Slide>
            <Heading size={3}>iptablesの例</Heading>
            <Image src={ex_iptables_image} width="70%" />
        </Slide>,
        <Slide>
            <Heading size={3}>iptablesで選べる表現</Heading>
            <List>
                <ListItem>iptablesで使う可能性のある表現</ListItem>
                <Image src={iptables_select_data} width="70%" />
                <ListItem>構成表現上はタプル</ListItem>
                <Image src={iptables_data_taple} width="70%" />
            </List>
        </Slide>,
        <Slide>
            <Heading size={4}>これでiptablesをざっくり表現上では定義できました</Heading>
            <Heading size={4}>(めっちゃ適当)</Heading>
        </Slide>,
        <Slide>
        <Heading size={3}>iptablesを用いたFW</Heading>
        <List>
            <ListItem>ざっくりとしているが簡単なFWルールの再帰的定義ができた</ListItem>
            <Image src={simple_fw} width="70%" />
        </List>
        </Slide>,
        <Slide>
            <Heading size={3}>つよい！！！！！</Heading>
        </Slide>,      
    ]},
    {name:"まとめ", bodies: [
        <Slide>
            <List>
                <ListItem>意味論は計算モデルに関する振る舞いを定義する</ListItem>
                <ListItem>型システムは記号における属性の集合と組み合わせ規則</ListItem>
                <ListItem>数理的な正しさは大事</ListItem>
            </List>
        </Slide>,
    ]}
];


export default () => (
    <div>
        <Deck theme={thickenProgressBar(theme)} transition={[]} transitionDuration={0} progress="bar">
            <Slide>
                <Heading fit>プログラム意味論について話す</Heading>
            </Slide>
            <Slide>
                <Image src={whoareyou} width="70%" />
            </Slide>
            <Slide>
                <Image src={takemioio} width="20%" />
                <Heading fit>Hayasaka, Takeru</Heading>
                <List>
                    <ListItem>Twitter: <Link href="https://twitter.com/takemioIO">@takemioIO</Link></ListItem>
                    <ListItem>Github: <Link href="https://github.com/takehaya">takehaya</Link></ListItem>
                    <ListItem>profile: <Link href="https://takehaya.github.io">takehaya</Link></ListItem>
                    <ListItem>nickname: 竹,takemioIO,たけちゃん</ListItem>
                </List>
            </Slide>
            <Slide>
                <Heading>最近のやってること</Heading>
                <List>
                    <ListItem>プログラム意味論・型システム</ListItem> 
                    <ListItem>コンパイラ</ListItem>                                       
                    <ListItem>infosec(CTF, SecHack365)</ListItem>
                    <ListItem>Ruby(インターン期間中にはじめました:)</ListItem>
                    <ListItem>Esperanto</ListItem>
                    <ListItem>Network</ListItem>
                </List>
            </Slide>
            <Slide>
                <Heading>注意</Heading>
            </Slide>
            <Slide>
                <Image src={quesion} width="50%"/>
                <Heading size={2}>任意のタイミングでしつもんOK</Heading>
            </Slide>
            <Slide>
                <Image src={work} width="70%"/>
                <Heading size={2}>任意のタイミングで退席・食事してOK</Heading>
            </Slide>
            <Slide>
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
            }
        </Deck>
        <GithubForkRibbon href="https://github.com/youxkei/devenv-slide/" color="orange">Fork me on Github</GithubForkRibbon>
        <Footer />
    </div>
);