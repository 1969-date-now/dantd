import React from 'react';
import Card from './Card';

const demo = () => {
  return (
    <div>
      <h3>组件名称：卡片（Card）</h3>
      <p>简单封装了 Card 组件，增加了 nsextra 属性，集成了复制到剪切板的功能。</p>
      <p>
        {' '}
        其他的配置参考 ：<a href="https://ant.design/components/card-cn/">Antd Card</a>
      </p>

      <Card antdProps={{ bordered: false, title: '无边框卡片' }}>
        <div style={{ width: 300, height: 300 }}>卡片详情</div>
      </Card>
      <br />
      <Card antdProps={{ title: '普通卡片' }}>
        <div style={{ width: 300, height: 300 }}>卡片详情</div>
      </Card>
      <br />
      <Card
        antdProps={{ title: '有NS节点的卡片' }}
        copyText="hnb-pre.one-stop-ui.one-stop.odin.op.didi.com"
      >
        <div style={{ width: 300, height: 300 }}>卡片详情</div>
      </Card>
    </div>
  );
};

export default demo;
