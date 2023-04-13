const Body1=document.getElementById('Body');
const SFMovieButton=document.getElementById('SFMovie');
const actionMovieBotton=document.getElementById('actionMovie');
const mysteryMovieBotton=document.getElementById('mysteryMovie');
const comedyMovieBotton=document.getElementById('comedyMovie');
const lastMovieBotton=document.getElementById('lastMovie');
const cryMovieBotton=document.getElementById('cryMovie');
const warMovieBotton=document.getElementById('warMovie');
const pictureMovieBotton=document.getElementById('pictureMovie');
const thrillerMovieBotton=document.getElementById('thrillerMovie');
const horrorMovieBotton=document.getElementById('horrorMovie');
const musicalMovieBotton=document.getElementById('musicalMovie');
const Introduction=document.getElementById('movieIntroduction');
const Introduction2=document.getAnimations('movieIntroduction2');
const xmasMoviebutton=document.getElementById('xmasMovie');
const AvengersMovieButton=document.getElementById('AvengersMovie');
const ConanMovieButton=document.getElementById('ConanMovie');
const HurryPotterMovieButton=document.getElementById('HurryPotterMovie');
const Title=document.getElementById('title');
const Title2=document.getElementById('title2');
const Sentence=document.getElementById('sentence1');
const Sentence2=document.getElementById('sentence2');
const Movie=document.getElementById('movie');
const Movie2=document.getElementById('movie2');
const Birds=document.getElementById('Birds');
const SF1= "https://www.youtube.com/embed/TfL1MQQ-HBw";
const SF2="https://www.youtube.com/embed/ysRIwlEBjuw";
const action1="https://www.youtube.com/embed/hyLAo_MAr0M";
const action2="https://www.youtube.com/embed/WBdyLyijZhU";
const mysteryMovie1="https://www.youtube.com/embed/9ORCFn57kbc";
const mysteryMovie2="https://www.youtube.com/embed/143K4aqT9-I";
const comedyMovie1="https://www.youtube.com/embed/A6X4VAHdDVg";
const comedyMovie2="https://www.youtube.com/embed/vlnq0PDUFbo";
const lastMovie1="https://www.youtube.com/embed/_nAIb_J9T5M";
const lastMovie2="https://www.youtube.com/embed/vMqCjFs_IEA";
const cryMovie1="https://www.youtube.com/embed/LkOK1SMoVmw";
const cryMovie2="https://www.youtube.com/embed/utVD-Gy32Fo";
const warMovie1="https://www.youtube.com/embed/vBg-5bJpkAw";
const warMovie2="https://www.youtube.com/embed/M2bEzJFVdQ4";
const pictureMovie1="https://www.youtube.com/embed/zHcuvt8R7uU";
const pictureMovie2="https://www.youtube.com/embed/KsoA3_ymqyA";
const thrillerMovie1="https://www.youtube.com/embed/C3nQcMM5fS4";
const thrillerMovie2="https://www.youtube.com/embed/V5dA92wqmME";
const horrorMovie1="https://www.youtube.com/embed/MMYvfNVQCIo";
const horrorMovie2="https://www.youtube.com/embed/LhCKXJNGzN8";
const musicalMovie1="https://www.youtube.com/embed/GuadtzQB2hk";
const musicalMovie2="https://www.youtube.com/embed/MGnlCmFZmYg";
const xmasMovie1="https://www.youtube.com/embed/SSrbrGP2x5Q";
const xmasMovie2="https://www.youtube.com/embed/bw-jpvF3u0Q";
const AvengersMovie1="https://www.youtube.com/embed/S747rLiAeFE";
const AvengersMovie2="https://www.youtube.com/embed/XsaXY3VXE-g";
const ConanMovie1="https://www.youtube.com/embed/QZzA_sZndhk";
const ConanMovie2="https://www.youtube.com/embed/sJwIGd22Cew";
const HurryPotterMovie1="https://www.youtube.com/embed/93PQ-REYQTc";
const HurryPotterMovie2="https://www.youtube.com/embed/Gky8xHHSiqE";


//2位	アベンジャーズ/エンドゲーム
//キャプテン・アメリカ：シビル・ウォー
//konnannベイカー庁の亡霊
//ハロウィンの花嫁
// hari-potta- アズカバンの囚人　死の秘宝１２
// daiha-do
//ホワイトクリスマス

SFMovieButton.onclick=function(){
 Body1.setAttribute('class','bodyCSS');
 Title.innerText='1.宇宙戦争(2005)';
 Movie.setAttribute('src',SF1);
 Movie.setAttribute('class','MovieYoutube');
 Sentence.innerText='監督：スティーヴン・スピルバーグ\n主演：トム・クルーズ\n\n　SF映画の金字塔。突如現れた”何か”によって街が破壊されていく世界で、家族と供に生き残るための「レイ」の必死の逃走劇。常に緊迫感があり、最後まではらはらドキドキする映画。街を破壊する”何か”の圧倒的な力、そして不気味さがより一層映画の緊張感を生み出しています。';
 Title2.innerText='2.シン・ゴジラ(2016)';
 Movie2.setAttribute('src',SF2);
 Sentence2.innerText='監督：庵野秀明\n主演：長谷川博己\n\n　ゴジラ作品の中で初めてフルCGで作られた特撮映画。現代日本に出現したゴジラが戦車等の攻撃をものともせずに圧倒的な力で暴れるまくる姿に、非常に絶望・恐怖を感じます。この作品は、ゴジラに対する政府の対応が軸となっており、単純なバトル映画ではない、とても面白いストーリ展開となっています。';
}
actionMovieBotton.onclick=function(){
    Body1.setAttribute('class','bodyCSS');
    Title.innerText='1.トップガン　マーヴェリック(2022)';
    Movie.setAttribute('src',action1);
    Sentence.innerText='監督：ジョセフ・コジンスキー\n主演：トム・クルーズ\n\n　1986年公開の世界的ヒット作品「トップガン」の続編。エリートパイロットの養成機関である「トップガン」史上最高の戦闘機パイロットが、教官としてトップガンへ舞い戻り、極秘ミッションを遂行するという物語。作中のスカイアクションでは、圧倒的臨場感・迫力を感じることができ、非常に見ごたえがあります。そして何よりトムクルーズがカッコいい。前作を見てから、視聴することをおすすめします。';
    Title2.innerText='2.インディージョーンズser (1981,1984,1989,2008)';
    Movie2.setAttribute('src',action2);
    Sentence2.innerText='監督：スティーブン・スピルバーグ\n主演：ハリソン・フォード\n\n　考古学者インディージョーンズの冒険物語。シリーズ全4作は、どれもアクション満載で、トレジャーハンターの最高傑作。私は特に、1作目のインディージョーンズ/レイダース　失われたアーク《聖櫃》がお気に入りで、初めて見た時の衝撃が忘れられません。';
}
mysteryMovieBotton.onclick=function(){
    Body1.setAttribute('class','bodyCSS');
    Title.innerText='1.容疑者Xの献身(2008)';
    Movie.setAttribute('src',mysteryMovie1);
    Sentence.innerText='監督：ジョナサン・デミ\n主演：福山雅治\n\n　東野圭吾原作「探偵ガリレオ」シリーズ初の長編作品。惨殺死体が発見された事件で、新人女性刑事が、ガリレオこと物理学者・湯川と協力しながら解決に向かう物語。ただの推理映画ではなく、深い愛の物語で、見てて、切なくなる映画です。';
    Title2.innerText='2.オリエント急行殺人事件（2017）';
    Movie2.setAttribute('src',mysteryMovie2);
    Sentence2.innerText='監督：シドニー・ルメット\n主演：アルバート・フィニー\n\n　アガサクリスティーの名作。世界一の探偵エルキュール・ポアロが寝台列車オリエント急行で起こった殺害事件の解決に挑む物語。豪華有名俳優が多く出演しており、それだけでも見る価値のある映画です。原作と同様、推理が一つにつながっていくゾクゾク感を味わえます。';
}

comedyMovieBotton.onclick=function(){
    Body1.setAttribute('class','bodyCSS');
    Title.innerText='1.アダムズファミリー(1991)';
    Movie.setAttribute('src',comedyMovie1);
    Sentence.innerText='監督：バリー・ソネンフェルド\n主演：デイヴ・ベイン\n\n　ブラックユーモアたっぷりのコメディー映画で、他にはない毒々しくて独特な世界観の作品。奇抜な映画で賛否両論わかれますが、はまる人には本当にはまる映画だと思います。（私は大はまりしました。）netflixで人気のドラマ「Wednesday」のもととなった作品です。';
    Title2.innerText='2.博士の異常な愛情()';
    Movie2.setAttribute('src',comedyMovie2);
    Sentence2.innerText='監督：スタンリー・キューブリック\n主演：ピーター・セラーズ\n\n戦争(核)が世界の破滅を導くことをシニカルに描いたブラックコメディ。東西冷戦の最中に撮影された作品で、もし実際に米ソ間で戦争が起きていたら、この映画のような結末をたどっていたかもしれない...等想像が広がる作品です。';
}
lastMovieBotton.onclick=function(){
    Body1.setAttribute('class','bodyCSS');
    Title.innerText='1.The Sting(1973)';
    Movie.setAttribute('src',lastMovie1);
    Sentence.innerText='監督：ジョージ・ロイ・ヒル\n主演：ポール・ニューマートン、ロバート・レッドフォード\n\n　大物ギャングに仲間を殺された若き詐欺師フッカーが、その恨みを晴らすため大ばくちを打つという犯罪ドラマ。二転三転するストーリー展開と小刻みのよいテンポが魅力で、何が本当か最後までわからない物語。一度見ただけでは理解が難しいかも...';
    Movie.setAttribute('src',lastMovie1);
    Title2.innerText='2.コンフィデンスマンJPser(2019,2020,2022)';
    Movie2.setAttribute('src',lastMovie2);
    Sentence2.innerText='監督：田中亮\n主演：長澤まさみ\n\n　様々な業界を舞台に、奇想天外な作戦で欲望にまみれた人間たちから大金をだまし取る3人組のコンフィデンスマン（信用詐欺師）の活躍を描いた痛快エンターテインメントコメディー作品。「何が真実で、何が嘘か」という名台詞からもわかる通り、見る人をも騙す最高のどんでん返しストーリー。';
}
cryMovieBotton.onclick=function(){
    Body1.setAttribute('class','bodyCSS');
    Title.innerText='1.タイタニック(1997)';
    Sentence.innerText='監督：ジェームズ・キャメロン\n主演：レオナルド・ディカプリオ、ケイト・ウィンストン\n\n　豪華客船タイタニック号の中でおこる、主人公ジャックとローズが織りなす美しく切ないラブストーリー。タイタニック号の悲劇が壮大なスケールで描かれ、セット、物語、役者、音楽すべてが素晴らしく、見るたびに大号泣してしまう不朽の名作です。';
    Movie.setAttribute('src',cryMovie1);
    Title2.innerText='2.グリーンマイル(1999)';
    Movie2.setAttribute('src',cryMovie2);
    Sentence2.innerText='監督：フランク・ダラボン\n主演：トム・ハンクス\n\n　死刑囚舎房の看守が、自身の義務について道徳的なジレンマに直面する様子を描いた感動作。作中の「生まれてきたことを謝る」というセリフが印象的で、なんともやるせない気持ちになります。何度見ても感動する名作です。';
}
warMovieBotton.onclick=function(){
    Body1.setAttribute('class','bodyCSS');
    Title.innerText='1.プライベートライアン(1998)';
    Movie.setAttribute('src',warMovie1);
    Sentence.innerText='監督：スティーブン・スピルバーグ\n主演：トム・ハンクス\n\n第2次世界大戦を舞台に、ある一人の兵隊を救うために送り込まれた精鋭部隊の物語。映画冒頭のノルマンディー上陸作戦を描いたシーンは、非常にリアルで臨場感があり、そのシーンだけでも見る価値がある作品です。';
    Title2.innerText='2.大脱走(1963)';
    Movie2.setAttribute('src',warMovie2);
    Sentence2.innerText='監督：ジョン・スタージェス\n主演：スティーブ・マックィーン\n\n第2次世界大戦末期、ドイツにある絶対に脱走不可能といわれた捕虜収容所で、連合軍兵士250人が脱走を目指すという大量脱走劇。誰もが一度は聞いたことがある劇中歌「大脱走マーチ」や後半のバイクチェイス等、見てて非常にワクワクする映画です。';
}
pictureMovieBotton.onclick=function(){
    Body1.setAttribute('class','bodyCSS');
    Title.innerText='1.アバターser(2009,2022)';
    Movie.setAttribute('src',pictureMovie1);
    Sentence.innerText='監督：ジェームズ・キャメロン\n主演：ゾーイ・サルダナ,サム・ワ―シントン\n\n　最新の映像技術を駆使したアドベンチャー大作。人間とナヴィ族のハイブリッドであるアバターの物語で、アバター一作目は世界の歴代興行収入第一位に君臨し続けている。ジェームズキャメロンによる壮大な物語と映像美に魅了されてしまうこと間違いなしです。';
    Title2.innerText='2.Dinner ダイナー(2019)';
    Movie2.setAttribute('src',pictureMovie2);
    Sentence2.innerText='監督：蜷川実花\n主演：藤原竜也\n\n　殺し屋専用の食堂「ダイナー」で起こる殺し屋たちの物語。色彩豊かで綺麗な映像になっており、特に戦闘（殺し合いの）シーンの映像美には何度も魅了されました。また豪華俳優陣も見どころの一つです。';
}
thrillerMovieBotton.onclick=function(){
    Body1.setAttribute('class','bodyCSS');
    Title.innerText='1.Joker(2019)';
    Movie.setAttribute('src',thrillerMovie1);
    Sentence.innerText='監督：トッド・フィリップス\n主演：ホアキン・フェニックス\n\n　「バットマン」の悪役として広く知られ、恐るべき狂気で人々を恐怖に陥れる悪のカリスマ「ジョーカー」の誕生物語。コメディアンとして世界に笑顔を届けようとしていたはずの一人の男が悪へと変貌する姿にゾクゾクがとまりません。';
    Title2.innerText='2.羊たちの沈黙(1991)';
    Movie2.setAttribute('src',thrillerMovie2);
    Sentence2.innerText='監督：ジョナサン・デミ\n主演：ジョディー・フォスター\n\n　猟奇事件の捜査に行き詰ったFBIが元精神科医の殺人鬼ハンニバル・レクターと協力し事件の究明に向かう物語。犯罪者との心理対決が面白く、最後まではらはら・ゾクゾクしながら楽しめる作品です。';
}

horrorMovieBotton.onclick=function(){
    Body1.setAttribute('class','bodyCSS');
    Title.innerText='1.コンジアム(2019)';
    Movie.setAttribute('src',horrorMovie1);
    Sentence.innerText='監督：チョン・ボムシク\n主演：イ・スンウク\n\n世界7大心霊スポットである実在の廃病院「コンジアム精神病院」が舞台の映画。Youtubeのライブ中継で、コンジアムへと足を踏み入れた若者たちの周りで起こる異常現象がとても恐ろしく、本当に怖い作品です。';
    Title2.innerText='2.ミスト(2008)';
    Movie2.setAttribute('src',horrorMovie2);
    Sentence2.innerText='監督：フランク・ダラボン\n主演：トーマス・ジェーン\n\n霧の中に潜んだ"何か"が人間を襲い始めるパニックムービー。胸糞映画としても有名なこの作品は、ラストの余りにも無情な現実に耐えることができません。様々な絶望が次から次へと襲い掛かる最凶のホラー映画です。';
}

musicalMovieBotton.onclick=function(){
    Body1.setAttribute('class','bodyCSS');
    Title.innerText='1.グレイテスト・ショーマン(2018)';
    Movie.setAttribute('src',musicalMovie1)
    Sentence.innerText='監督：マイケル・グレイシー\n主演：ヒュー・ジャックマン\n\n　19世紀アメリカに実在した興行師P・T・バーナムの半生を描いたミュージカル。妻子を幸せにするため、「フィニアス」がさまざまな個性をもつ人々を集め、誰も見たことがないショーを作り上げる物語。ヒュージャックマンとザックエフロンの夢の共演が見れるだけではなく、最高のセット・曲・ストーリーも含めた最高傑作のミュージック映画です。';
    Title2.innerText='2.サウンドオブミュージック(1965)';
    Movie2.setAttribute('src',musicalMovie2);
    Sentence2.innerText='監督：ロバート・ワイズ\n主演：ジュリー・アンドリュース\n\n　大ヒットブロードウェイ・ミュージカルで、王道ミュージカル映画の一つ。1938年のオーストリアで、厳格なトラップ家へ家庭教師としてやって来た修道女の物語。有名な曲ばかりで、歌の素晴らしさを感じることができる作品です。私は特に「ひとりぼっちの羊飼い」を歌うシーンが大好きです。';
}

xmasMoviebutton.onclick=function(){
    Body1.setAttribute('class','bodyCSSXmas')
    Title.innerText='1.Disney‘sクリスマス・キャロル(2008)';
    Movie.setAttribute('src',xmasMovie1);
    Sentence.innerText='監督：ロバート・ゼメキス\n主演：ジム・キャリー\n\n　金の亡者で嫌われ者のスクルージが、クリスマス・イブの夜に精霊に連れられ「過去」「現在」「未来」を旅行する物語。他のクリスマスキャロルと比べて、迫力があり、少しホラー・チックな作品です。私はDisneyのクリスマスキャロルが一番好きです。';
    Title2.innerText='2.ホワイトクリスマス(1954)';
    Movie2.setAttribute('src',xmasMovie2);
    Sentence2.innerText='監督：\nマイケル・カーティス\n主演：ピング・グロスピー\n\n　第二次世界大戦後のアメリカを舞台に、元兵隊の「ボブ」と「フィル」が元上官が働くホテル再建のため、エンターテイメントショーを行うというミュージカル映画。仕事・恋・歌・ダンスなど様々な要素が盛り込まれた、クリスマスにぴったりの映画です。';
}

AvengersMovieButton.onclick=function(){
    Body1.setAttribute('class','bodyCSS');
    Title.innerText='1.アベンジャーズ/エンドゲーム(2019)'
    Movie.setAttribute('src',AvengersMovie1);
    Sentence.innerText='監督：アンソニー・ルッソ、ジョー・ルッソ\n\n　MCUの各登場人物たちが豪華共演するメガヒット作「アベンジャーズ」の4作目。悪役「サノス」を倒して世界や仲間を救うため、史上最大の戦いに挑むヒーローたちの姿を描いた作品。多くのアメコミヒーローが集結したシーンは鳥肌がとまりませんでした。MCU映画をすべてみて初めて真価がわかる映画でもあるので、1作目から見るのがおすすめです。';
    Title2.innerText='2.シビル・ウォー／キャプテン・アメリカ(2016)';
    Movie2.setAttribute('src',AvengersMovie2);
    Sentence2.innerText='監督：アンソニー・ルッソ、ジョー・ルッソ\n\n　「キャプテン・アメリカ」シリーズの第3作。キャプテン・アメリカとアイアンマンという「アベンジャーズ」を代表する2人のヒーローの対立を描いた作品で、ブラックパンサーやスパイダーマンがはじめて参戦した映画でもあります。ヒーロー同士の迫力あるバトルシーンは、興奮間違いなしです。';
}


HurryPotterMovieButton.onclick=function(){ 
    Body1.setAttribute('class','bodyCSS');
    Title.innerText='1.ハリーポッター　アズカバンの囚人(2004)'
    Movie.setAttribute('src',HurryPotterMovie1);
    Sentence.innerText='監督：アルフォンソ・キュアロン\n\n　J・K・ローリングの世界的ベストセラーを映画化したファンタジーシリーズの第3作。囚人「シリウス・ブラック」がアズカバン監獄を脱獄したところから物語が始まる。1,2作目よりもダークな雰囲気になっており、子供映画から大人映画へ変わった印象を受けるのがこの3作目です。伏線回収等のストーリーが非常に面白く、またこの先のハリーポッターシリーズで重要となる人物が登場する回でもあるため絶対に見てほしい作品です。';
    Title2.innerText='2.ハリー・ポッターと死の秘宝 PART2(2011)';
    Movie2.setAttribute('src',HurryPotterMovie2);
    Sentence2.innerText='監督:デビッド・イェーツ\n\n　ハリーポッターシリーズ最終章2部作の完結編。悪の魔法使いヴォルデモートと魔法界(ホグワーツ)の最終決戦で、これぞ"ハリーポッター"というスケールの大きい魔法対決が見られる作品です。１作目からの長きに渡る伏線が回収される感動の最終回になっています。';
}

ConanMovieButton.onclick=function(){
    Body1.setAttribute('class','bodyCSS');
    Title.innerText='1.名探偵コナン ベイカー街の亡霊(2002)';
    Movie.setAttribute('src',ConanMovie1);
    Sentence.innerText='監督:こだま兼嗣\n\n　殺人事件解明の糸口を追って、仮想体感ゲームに挑む少年探偵・コナンの活躍を描いた長篇アニメーション・シリーズの第6作目。ゲームの中でおこる事件も、現実世界の事件も刺激的で面白く、観ていて本当に引き込まれる作品です。推理とアクションのバランスもよく、何度も見たいコナン映画の一つです。';
    Title2.innerText='2.名探偵コナン　ハロウィンの花嫁(2022)';
    Movie2.setAttribute('src',ConanMovie2);
    Sentence2.innerText='監督：満仲勧\n\n　「名探偵コナン」の劇場版25作目。渋谷のハロウィンを舞台とした連続爆発事件に挑む物語で、推理展開や登場人物、緊迫したアクションシーン等、近年のコナン映画の中で、一番面白いといえる作品でした。';
}



//<button id="actionMovie" class="actionmovie" >アクション映画</button>
//<button id="mysteryMovie" class="mysterymovie">ミステリー映画</button>
//<button id="comedyMovie" class="comedymovie">コメディー映画</button>
//<button id="lastMovie" class="lastmovie">大どんでん返し映画</button>
//<button id="cryMovie" class="crymovie">泣きたいときに見る映画</button>
//<button id="warMovie" class="warmovie">戦争映画</button>
//<button id="pictureMovie" class="picturemovie">映像が綺麗な映画</button>
//<button id="thrillerMovie" class="thrillermovie">スリラー映画</button>
//<button id="horrorMovie" class="horrormovie">ホラー映画</button>
//<button id="musicalMovie" class="musicalmovie">ミュージカル映画</button>


//*泣きたいときに見る映画　タイタニック　グリーンマイル　
//SF映画　宇宙戦争　シンゴジラ
//騙され映画　コンフィデンスマン映画　THe sting 
//ミステリー　オリエント急行殺人事件　容疑者Xの献身
//アクション　マーベルシリーズ　インディージョーンズ
//ホラー映画　コンジアム　ミスと
//スリラー　ジョーかー　羊たちの沈黙　
//映像がきれい　アバター　ダイナー
//戦争映画　ぷらーべーとライアン　大脱走
//コメディー　アダムズファミリー　博士の異常な愛情
//**//
