// LICENSE : MIT
"use strict";
/*
    (a)「~なくは / もない」
    「~なく」(否定助動詞 / 否定形容詞)「ない」の連用形)+とりたて助詞「は / も」+ 補助形容詞「ない」
    は:  だが、それが事件の発端だったといえなくもない。
    も: いや、本音を言えば、それよりこちらの方が大事ではないかという思いもなくはなかった。
 */
import matchTokenStream from "./../matchTokenStream";
export default function (context) {
    const {RuleError} = context;
    const matchPatternなくもない = matchTokenStream([
        {
            "basic_form": "ない"
        },
        {
            "surface_form": "も",
            "pos": "助詞"
        },
        {
            "basic_form": "ない",
            "pos": "形容詞"
        }
    ]);
    const matchPatternなくはない = matchTokenStream([
        {
            "basic_form": "ない"
        },
        {
            "surface_form": "は",
            "pos": "助詞"
        },
        {
            "basic_form": "ない",
            "pos": "形容詞"
        }
    ]);
    return (token) => {
        if (matchPatternなくもない(token)) {
            return new RuleError("二重否定: 〜なくもない", {
                column: token.word_position - 1
            });
        }
        if (matchPatternなくはない(token)) {
            return new RuleError("二重否定: 〜なくはない", {
                column: token.word_position - 1
            });
        }
    };
}