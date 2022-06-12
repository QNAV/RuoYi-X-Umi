import type { UpdateUserPasswordParams } from '@/services/user';
import { reqUpdateUserPassword } from '@/services/user';
import { logout, regPassword } from '@/utils';
import type { ProFormInstance } from '@ant-design/pro-components';
import { ProForm, ProFormText } from '@ant-design/pro-components';
import { useRequest } from 'ahooks';
import { Button, message } from 'antd';
import type { FC } from 'react';
import { useRef } from 'react';

const PwdForm: FC = () => {
  const formRef = useRef<ProFormInstance<UpdateUserPasswordParams>>();

  const { run, loading } = useRequest(reqUpdateUserPassword, {
    manual: true,
    onSuccess: () => {
      message.success('密码修改成功，即将自动跳转至登录页面');

      const timer = setTimeout(async () => {
        logout();
        clearTimeout(timer);
      }, 1500);
    },
  });

  return (
    <ProForm formRef={formRef} submitter={false}>
      <ProFormText.Password name="oldPassword" label="旧密码" rules={[{ required: true }]} width="md" />

      <ProFormText.Password
        name="newPassword"
        label="新密码"
        width="md"
        rules={[
          { required: true },
          { pattern: regPassword, message: '长度在6-20之间，只能包含字母、数字和下划线' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (value !== getFieldValue('oldPassword')) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('新旧密码不能相同'));
            },
          }),
        ]}
      />

      <ProFormText.Password
        name="confirmPassword"
        label="确认密码"
        width="md"
        rules={[
          { required: true },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('newPassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('两次密码输入不一致'));
            },
          }),
        ]}
      />

      <Button
        type="primary"
        loading={loading}
        onClick={async () => {
          const values = await formRef?.current?.validateFields();

          if (!values) return;

          run(values);
        }}
      >
        更新密码
      </Button>
    </ProForm>
  );
};

export default PwdForm;