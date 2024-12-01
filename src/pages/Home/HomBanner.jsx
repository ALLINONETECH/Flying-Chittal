import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import './assets/index.less';
// import '../assets/index.less';

const { Element } = BannerAnim;
const BgElement = Element.BgElement;
function BannerHome() {
  return (
    <BannerAnim type="across">
      <Element key="aaa"
        prefixCls="banner-user-elem"
        followParallax={{
          delay: 1000,
          data: [
            { id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionY'] },
            { id: 'title', value: -20, type: 'y' },
            { id: 'queue', value: 50, type: 'y' },
            { id: 'JText', value: -30, type: 'y' },
          ],
        }}
      >
        <BgElement
          id="bg"
          key="bg"
          className="bg"
          style={{
            backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <QueueAnim id="queue" key="queue">
          <h1 key="h1" id="title">Ant Motion Demo</h1>
          <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
        </QueueAnim>
        <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} id="JText">
          Ant Motion Demo.Ant MotionDemo
        </TweenOne>
      </Element>
      <Element key="bbb"
        prefixCls="banner-user-elem"
      >
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <QueueAnim>
          <h1 key="h1">Ant Motion Demo</h1>
          <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
        </QueueAnim>
        <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }}>
          Ant Motion Demo.Ant Motion Demo
        </TweenOne>
      </Element>
    </BannerAnim>
  );
}
export default BannerHome;