import rule from "../src/no-doubled-negative-ja";
import TextLintTester from "textlint-tester";
var tester = new TextLintTester();
tester.run("no-doubled-negative", rule, {
    valid: [],
    invalid: [
        {
            text: "だが、それが事件の発端だったといえなくもない。",
            errors: [
                {
                    message: "二重否定: 〜なくもない",
                    column: 21
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
        }


    ]
});