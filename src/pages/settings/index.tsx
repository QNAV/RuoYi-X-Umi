import PwdForm from '@/pages/settings/components/PwdForm';
import UserDescriptions from '@/pages/settings/components/UserDescriptions';
import { ProCard } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';
import type { FC } from 'react';
import { useState } from 'react';

enum TabKey {
  PASSWORD = 'PASSWORD',
}

const SettingsPage: FC = () => {
  const [activeKey, setActiveKey] = useState<TabKey>(TabKey.PASSWORD);

  return (
    <PageContainer title="个人中心">
      <ProCard ghost direction="column" gutter={[0, 24]}>
        <ProCard>
          <UserDescriptions />
        </ProCard>

        <ProCard tabs={{ activeKey, onChange: (e) => setActiveKey(e as TabKey) }}>
          <ProCard.TabPane key={TabKey.PASSWORD} tab="安全设置">
            <PwdForm />
          </ProCard.TabPane>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default SettingsPage;
