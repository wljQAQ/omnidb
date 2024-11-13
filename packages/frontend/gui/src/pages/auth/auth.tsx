import React, { useState } from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, message, Radio, Select, Space } from 'antd';

import { IconFont } from '@omnidb/component/icon-font';

import { nanoid } from 'nanoid';
import { useNavigate, useSearchParams } from 'react-router-dom';

const options = [
  {
    value: 'china',
    label: '+86',
    showLabel: '+86 中国大陆'
  },
  {
    value: 'hongkong',
    label: '+852',
    showLabel: '+852 中国香港'
  }
];

const loginType = [
  {
    icon: 'icon-github',
    label: 'GitHub',
    provider: 'github'
  },
  {
    icon: 'icon-google',
    label: 'Google',
    provider: 'google'
  },
  {
    icon: 'icon-wechat',
    label: '微信',
    provider: 'wechat'
  }
];

/**
 * 第三方 OAuth 登录
 */
async function oAuthLogin() {
  const clientId = 'Ov23liIjKcMH599s4BCL';
  const redirectUri = 'http://127.0.0.1:5173/oauth/callback';

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    state: nanoid()
  });
  console.log('🚀 ~ oAuthLogin ~ params:', params);

  window.location.href = `https://github.com/login/oauth/authorize?${params.toString()}`;
}

export default function Auth() {
  return (
    <div className="h-full w-full bg-gray-50">
      <div className="m-auto w-96 pt-24">
        <div className="h-fit min-h-[540px] rounded-lg bg-white px-8 pt-10 shadow-box">
          {/* logo */}
          <div className="mb-12 gap-3 flex-center">
            <IconFont type="icon-github" className="text-4xl" />
            <span className="text-2xl font-bold tracking-wider">Bitable</span>
          </div>
          {/* login form */}
          <Form>
            <Form.Item name="username">
              <Space.Compact className="w-full">
                <Select
                  defaultValue="china"
                  options={options}
                  className="!w-1/3"
                  size="large"
                  popupMatchSelectWidth={false}
                  optionRender={val => {
                    return <span>{val.data.showLabel}</span>;
                  }}
                />
                <Input placeholder="手机号" size="large" />
              </Space.Compact>
            </Form.Item>

            <Form.Item name="username">
              <Space className="w-full">
                <Input placeholder="6位短信验证码" size="large" />
                <Button className="text-gray-500" size="large">
                  获取验证码
                </Button>
              </Space>
            </Form.Item>

            <Form.Item>
              <Radio value="1">我已阅读并同意 XXX 服务协议 和 隐私政策 </Radio>
            </Form.Item>

            <Form.Item>
              <Button type="primary" size="large" className="w-full">
                登录
              </Button>
            </Form.Item>
          </Form>

          {/* footer */}
          <div className="mt-12">
            <Divider className="!text-sm !text-gray-500">其他登录方式</Divider>

            <Space className="w-full justify-center" size={24}>
              {loginType.map(item => (
                <span className="cursor-pointer text-3xl" key={item.label} onClick={oAuthLogin}>
                  <IconFont type={item.icon} />
                </span>
              ))}
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
}
