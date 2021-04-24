import rule from "../src/no-doubled-negative-ja";
import TextLintTester from "textlint-tester";
var tester = new TextLintTester();
tester.run("no-doubled-negative", rule, {
    valid: [],
    invalid: [
        // a
        {
            text: "だが、それが事件の発端だったといえなくもない。",
            errors: [
                {
                    message: "二重否定: 〜なくもない",
                    column: 21
                }
            ]
        },
        {// 漢字
            text: "だが、それが事件の発端だったといえ無くも無い。",
            errors: [
                {
                    message: "二重否定: 〜なくもない",
                    column: 21
                }
            ]
        },
        {// multiline
            text: "いや、\n本音を言えば、\nそれよりこちらの方が大事ではないかという思いもなくはなかった。",
            errors: [
                {
                    message: "二重否定: 〜なくはない",
                    line: 3,
                    column: 27
                }
            ]
        },
        {
            text: "いや、本音を言えば、それよりこちらの方が大事ではないかという思いもなくはなかった。",
            errors: [
                {
                    message: "二重否定: 〜なくはない",
                    column: 37
                }
            ]
        },
        // b
        {
            text: "サルが二匹でテレビに出ても仕方がないので、勘弁していただいたが、少し残念な気がしないでもない",
            errors: [
                {
                    message: "二重否定: 〜ないではない",
                    column: 45
                }
            ]
        },
        {
            text: "紅茶だけ飲んでおく、という手もないではないが、何か、腹に力がこもらない感じである。",
            errors: [
                {
                    message: "二重否定: 〜ないでもない",
                    column: 20
                }
            ]
        },
        // c
        {
            text: "どんな窃視的行為に出ないものでもない。",
            errors: [
                {
                    message: "二重否定: 〜ないものでもない",
                    column: 17
                }
            ]
        },
        {// 漢字
            text: "どんな窃視的行為に出ないものでも無い。",
            errors: [
                {
                    message: "二重否定: 〜ないものでもない",
                    column: 17
                }
            ]
        },
        {
            text: "これらの投与が決して避けられないものではなかったことが、不条理な無念さで患者たち、そして死者たちを眠らせない。",
            errors: [
                {
                    message: "二重否定: 〜ないものではない",
                    column: 21
                }
            ]
        },
        // d
        {
            text: "確かにそういった懸念はないことはない。",
            errors: [
                {
                    message: "二重否定: 〜ないことはない",
                    column: 17
                }
            ]
        },
        {
            text: "確かにそういった懸念はない事はない。",
            errors: [
                {
                    message: "二重否定: 〜ないことはない",
                    column: 16
                }
            ]
        },
        {
            text: "憂鬱でないこともない。",
            errors: [
                {
                    message: "二重否定: 〜ないこともない",
                    column: 9
                }
            ]
        },
        {
            text: "憂鬱でないコトもない。",
            errors: [
                {
                    message: "二重否定: 〜ないこともない",
                    column: 9
                }
            ]
        },
        {
            text: "そういえないこともないですが......",
            errors: [
                {
                    message: "二重否定: 〜ないこともない",
                    column: 10
                }
            ]
        },
        {
            text: "そういう話なら、ないこともないでしょう。",
            errors: [
                {
                    message: "二重否定: 〜ないこともない",
                    column: 14
                }
            ]
        },
        // e
        {
            text: "ないわけでもないですが",
            errors: [
                {
                    message: "二重否定: 〜ないわけでもない",
                    column: 7
                }
            ]
        },
        {
            text: "ない訳でもないですが",
            errors: [
                {
                    message: "二重否定: 〜ないわけでもない",
                    column: 6
                }
            ]
        },
        {
            text: "ないわけではないですが",
            errors: [
                {
                    message: "二重否定: 〜ないわけではない",
                    column: 7
                }
            ]
        },
        {// 漢字
            text: "ない訳ではないですが",
            errors: [
                {
                    message: "二重否定: 〜ないわけではない",
                    column: 6
                }
            ]
        },
        // f
        {
            text: "問題ないと言い切れない",
            errors: [
                {
                    message: "二重否定: 〜ないといいきれない",
                    column: 10
                }
            ]
        },
        {
            text: "問題ないとは言い切れない",
            errors: [
                {
                    message: "二重否定: 〜ないとはいいきれない",
                    column: 11
                }
            ]
        },
        // g
        {
            text: "問題ないとは限らない",
            errors: [
                {
                    message: "二重否定: 〜ないとはかぎらない",
                    column: 9
                }
            ]
        },
        {
            text: "問題ないとも限らない",
            errors: [
                {
                    message: "二重否定: 〜ないともかぎらない",
                    column: 9
                }
            ]
        },
        // 3重否定
        {
            text: "憂鬱でないこともないこともない。",
            errors: [
                {
                    message: "二重否定: 〜ないこともない",
                    column: 9
                }
            ]
        },
    ]
});
