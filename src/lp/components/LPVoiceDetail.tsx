import React from 'react';

interface VoiceItem {
  text: string;
  context: string;
  author: string;
  type: string;
  area: string;
}

const voices: VoiceItem[] = [
  {
    context: '開業準備中、3社に相見積もりを取りました。',
    text: '他の2社は総額だけの見積もりで、何にいくらかかるのか全然わからなかった。記憶荘だけが「この壁のこの部分がいくら」まで出してくれて、それが融資の申請書類にもそのまま使えました。おかげで公庫の面談もスムーズでした。',
    author: '佐藤さん（仮名）',
    type: 'カフェ・12坪',
    area: '仙台市青葉区',
  },
  {
    context: '物件が決まる前に相談しました。',
    text: '「まだ物件も決まってないのに相談していいのかな」と思いながらLINEしたら、翌日には候補物件の間取りに合わせたラフレイアウトを出してもらえた。居抜きの活かし方まで提案してくれて、物件選びの判断材料になりました。しかもここまで無料で、断っても全然大丈夫と言ってくれたのが安心でした。',
    author: '田中さん（仮名）',
    type: '居酒屋・18坪',
    area: '仙台市宮城野区',
  },
  {
    context: '予算が限られていて不安でした。',
    text: '最初に正直に予算を伝えたら、「この範囲でできることとできないことを整理しましょう」と言ってくれました。既存のカウンターを活かす提案や、壁の一部だけ塗り替える案、照明で雰囲気を変える方法まで教えてもらえた。結果、想像よりずっといい仕上がりになって、お客さんにも「いい店だね」と言われます。',
    author: '鈴木さん（仮名）',
    type: '美容室・10坪',
    area: '宮城県多賀城市',
  },
];

const LPVoiceDetail: React.FC = () => {
  return (
    <section style={{
      background: '#FFFFFF',
      padding: '56px 20px',
      maxWidth: 800,
      margin: '0 auto',
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {voices.map((v, i) => (
          <div key={i} style={{
            borderLeft: '3px solid #A8BFA2',
            paddingLeft: 20,
          }}>
            <p style={{
              fontSize: 12,
              color: '#999999',
              margin: '0 0 8px',
            }}>
              {v.context}
            </p>
            <p style={{
              fontSize: 14,
              lineHeight: 1.9,
              color: '#333333',
              margin: 0,
            }}>
              「{v.text}」
            </p>
            <p style={{
              fontSize: 12,
              color: '#666666',
              margin: '12px 0 0',
            }}>
              {v.author}｜{v.type}・{v.area}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LPVoiceDetail;
