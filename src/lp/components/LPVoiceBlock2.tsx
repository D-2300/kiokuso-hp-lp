import React from 'react';
import LPVoiceBubble from './LPVoiceBubble';

interface VoiceItem {
  text: string;
  context: string;
  author: string;
  detail: string;
}

const voices: VoiceItem[] = [
  {
    context: '開業準備中、3社に相見積もりを取りました。',
    text: '他の2社は総額だけの見積もりで、何にいくらかかるのか全然わからなかった。記憶荘だけが「この壁のこの部分がいくら」まで出してくれて、それが融資の申請書類にもそのまま使えました。おかげで公庫の面談もスムーズでした。',
    author: '佐藤さん（仮名）',
    detail: 'カフェ・12坪・仙台市青葉区',
  },
  {
    context: '物件が決まる前に相談しました。',
    text: '「まだ物件も決まってないのに相談していいのかな」と思いながらLINEしたら、翌日には候補物件の間取りに合わせたラフレイアウトを出してもらえました。居抜きの活かし方まで提案してくれて、物件選びの判断材料になりました。しかもここまで無料で、断っても全然大丈夫と言ってくれたのが安心でした。',
    author: '田中さん（仮名）',
    detail: '居酒屋・18坪・仙台市宮城野区',
  },
  {
    context: '予算が限られていて不安でした。',
    text: '最初に正直に予算を伝えたら、「この範囲でできることとできないことを整理しましょう」と言ってくれました。既存のカウンターを活かす提案や、壁の一部だけ塗り替える案、照明で雰囲気を変える方法まで教えてもらえた。結果、想像よりずっといい仕上がりになって、お客さんにも褒められます。',
    author: '鈴木さん（仮名）',
    detail: '美容室・10坪・宮城県多賀城市',
  },
];

const LPVoiceBlock2: React.FC = () => {
  return (
    <section style={{
      background: '#FFFFFF',
      padding: '56px 20px',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <p style={{
          fontSize: 12,
          fontWeight: 300,
          letterSpacing: 4,
          color: '#A8BFA2',
          margin: '0 0 8px',
          textTransform: 'uppercase',
        }}>
          Voice
        </p>
        <h2 style={{
          fontSize: 20,
          fontWeight: 500,
          color: '#333333',
          margin: 0,
        }}>
          ご利用いただいた方の声
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
        {voices.map((v, i) => (
          <div key={i}>
            <p style={{
              fontSize: 12,
              color: '#999999',
              margin: '0 0 12px',
              maxWidth: 640,
              marginLeft: 'auto',
              marginRight: 'auto',
              paddingLeft: 72,
            }}>
              {v.context}
            </p>
            <LPVoiceBubble
              text={v.text}
              author={v.author}
              detail={v.detail}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LPVoiceBlock2;
