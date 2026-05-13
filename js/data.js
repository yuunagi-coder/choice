// 名言データの配列
const appData = {
    quotes: [
        {
            text: "そのことはできる、それをやる、と決断せよ。方法は後から見つければいいのだ",
            author: "エイブラハム・リンカーン"
        },
        {
            text: "決断しないことは、時として間違った行動よりたちが悪い",
            author: "ヘンリー・フォード"
        },
        {
            text: "最も難しいのは、行動しようと決断することです。",
            author: "アメリア・イアハート"
        },
        {
            text: "決断時における最善の選択は、正しいことをすること。次に良いのは間違ったことをすることである。一番悪いのは、何もしないことである。",
            author: "セオドア・ルーズベルト"
        },
        {
            text: "あなたの決断を批判する人は必ずいる。その批判が正しいと信じざるをえないほどの困難も出てくるに違いない。やるべきことの計画を立て、それをやり遂げるのは、本当に勇気がいることである。",
            author: "エマーソン"
        },
        {
            text: "行動しないことも、ひとつの選択肢である",
            author: "ウィリアム・ジェイムズ"
        }
    ],
    comment: [
        "良い選択を…",
        "選んだ先で正解にしていこう",
        "深呼吸して、行ってらっしゃい",
        "良い一日を…",
        "あなたらしい答えを…"
    ],
    
    getRandomQuote(){
        const index = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[index]; 
    } ,

    getRandomComment(){
        const index = Math.floor(Math.random() * this.comment.length);
        return this.comment[index];
    }
}