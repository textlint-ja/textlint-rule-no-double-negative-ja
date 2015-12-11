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
                    message: "二重否定: 「~なく」(否定助動詞 / 否定形容詞)「ない」の連用形)+とりたて助詞「は / も」+ 補助形容詞「ない」",
                    column: 21
                }
            ]
        },
        {
            text: "いや、本音を言えば、それよりこちらの方が大事ではないかという思いもなくはなかった。",
            errors: [
                {
                    message: "二重否定: 「~なく」(否定助動詞 / 否定形容詞)「ない」の連用形)+とりたて助詞「は / も」+ 補助形容詞「ない」",
                    column: 37
                }
            ]
        },
        // b
        {
            text: "サルが二匹でテレビに出ても仕方がないので、勘弁していただいたが、少し残念な気がしないでもない",
            errors: [
                {
                    message: "二重否定: ~ない(否定助動詞/否定形容詞「ない」の連体形)+連用形「で」+とりたて助詞「も / は」+補助形容詞「ない」",
                    column: 45
                }
            ]
        },
        {
            text: "紅茶だけ飲んでおく、という手もないではないが、何か、腹に力がこもらない感じである。",
            errors: [
                {
                    message: "二重否定: ~ない(否定助動詞/否定形容詞「ない」の連体形)+連用形「で」+とりたて助詞「も / は」+補助形容詞「ない」",
                    column: 20
                }
            ]
        }


    ]
});