import { GithubIcon } from '@/components/GithubIcon';
import Actions from '@/pages/login/components/Actions';
import type { LoginByPwdParams, LoginBySmsParams, LoginResponse } from '@/services';
import { reqGetCaptchaImage, reqLoginByPwd, reqLoginBySms } from '@/services';
import { regPhone, setToken, StorageType } from '@/utils';
import { useNavigate } from '@@/exports';
import { useModel } from '@@/plugin-model';
import { LockOutlined, MobileOutlined, SafetyCertificateOutlined, UserOutlined } from '@ant-design/icons';
import { LoginFormPage, ProFormCaptcha, ProFormCheckbox, ProFormGroup, ProFormText } from '@ant-design/pro-components';
import { useRequest } from 'ahooks';
import { Image, message, Skeleton, Tabs } from 'antd';
import qs from 'query-string';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

interface FormData extends LoginByPwdParams, LoginBySmsParams {
  autoLogin: boolean;
}

enum LoginType {
  MOBILE = 'MOBILE',
  USERNAME = 'USERNAME',
}

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const { refresh } = useModel('@@initialState');
  const [loginType, setLoginType] = useState<LoginType>(LoginType.USERNAME);

  const { data: getCaptchaImageRes, loading, run: getCaptchaImage } = useRequest(reqGetCaptchaImage);

  const showError = () => {
    const searchObj = qs.parse(window.location.search) as {
      code?: string;
      msg?: string;
      redirect?: string;
    };

    if (searchObj?.msg) {
      message.error(searchObj.msg);

      navigate(LOGIN_PATH_NAME, { replace: true });
    }
  };

  const submit = async (e: FormData) => {
    try {
      const { autoLogin, ...formData } = e;

      let loginRes: LoginResponse;

      if (loginType === LoginType.MOBILE) {
        loginRes = await reqLoginBySms(formData);
      } else if (!getCaptchaImageRes) {
        message.error('请先获取图片验证码');
        return;
      } else {
        loginRes = await reqLoginByPwd({ ...formData, uuid: getCaptchaImageRes.uuid });
      }

      setToken(autoLogin ? StorageType.LOCAL_STORAGE : StorageType.SESSION_STORAGE, `Bearer ${loginRes.token}`);

      await refresh();

      navigate('/');
    } catch (error) {
      if (loginType === LoginType.USERNAME) {
        getCaptchaImage();
      }
    }
  };

  useEffect(() => {
    showError();
  }, []);

  return (
    <div className="h-[100vh]">
      <LoginFormPage<FormData>
        backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        title="RuoYi X Umi"
        subTitle="若依后台管理系统"
        actions={<Actions />}
        onFinish={submit}
        activityConfig={{
          action: <GithubIcon />,
        }}
      >
        <Tabs activeKey={loginType} onChange={(activeKey) => setLoginType(activeKey as LoginType)}>
          <Tabs.TabPane key={LoginType.USERNAME} tab="账号密码登录" />
          <Tabs.TabPane key={LoginType.MOBILE} tab="手机号登录" />
        </Tabs>

        {loginType === LoginType.USERNAME && (
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined />,
              }}
              placeholder="请输入用户名"
              rules={[
                {
                  required: true,
                  message: '请输入用户名',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined />,
              }}
              placeholder="请输入密码"
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                },
              ]}
            />

            <ProFormGroup>
              <ProFormText
                width={160}
                name="code"
                placeholder="请输入验证码"
                fieldProps={{
                  size: 'large',
                  prefix: <SafetyCertificateOutlined />,
                }}
                rules={[
                  {
                    required: true,
                    message: '请输入验证码',
                  },
                ]}
              />

              <div className="h-[40px] w-[135px] cursor-pointer  border border-solid border-gray-300">
                {loading ? (
                  <Skeleton.Button active block size="large" />
                ) : (
                  <Image
                    src={`data:image/png;base64,${getCaptchaImageRes?.img}`}
                    preview={false}
                    className="h-[40px] w-[135px]"
                    alt="验证码"
                    onClick={getCaptchaImage}
                  />
                )}
              </div>
            </ProFormGroup>
          </>
        )}

        {loginType === LoginType.MOBILE && (
          <>
            <ProFormText
              fieldProps={{
                maxLength: 11,
                size: 'large',
                prefix: <MobileOutlined />,
              }}
              name="phonenumber"
              placeholder="请输入手机号"
              rules={[
                {
                  required: true,
                  message: '请输入手机号',
                },
                {
                  pattern: regPhone,
                  message: '手机号格式错误',
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined />,
              }}
              captchaProps={{
                size: 'large',
              }}
              placeholder="请输入验证码"
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${'获取验证码'}`;
                }
                return '获取验证码';
              }}
              name="smsCode"
              rules={[
                {
                  required: true,
                  message: '请输入验证码',
                },
              ]}
              onGetCaptcha={async () => {
                message.info('敬请期待');

                return Promise.reject(new Error('敬请期待'));
              }}
            />
          </>
        )}

        <ProFormCheckbox name="autoLogin">自动登录</ProFormCheckbox>
      </LoginFormPage>
    </div>
  );
};

export default LoginPage;
