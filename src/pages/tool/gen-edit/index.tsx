import DescBase from '@/pages/tool/gen-edit/components/DescBase';
import EditableTableField from '@/pages/tool/gen-edit/components/EditableTableField';
import type { GenInfoDto } from '@/pages/tool/gen-edit/data';
import { GenGetInfo, GenPostEdit } from '@/services/gen/GenService';
import { useParams } from '@@/exports';
import { ProCard } from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-layout';
import { useMutation } from '@tanstack/react-query';
import { useRequest } from 'ahooks';
import { message } from 'antd';
import type { FC } from 'react';
import { useState } from 'react';

enum TabKey {
  BASE_INFO = 'BASE_INFO',
  FIELD_INFO = 'FIELD_INFO',
}

const TabName = {
  [TabKey.BASE_INFO]: '基本信息',
  [TabKey.FIELD_INFO]: '字段信息',
};

const GenEditPage: FC = () => {
  const params = useParams();
  const tableId = Number(params?.tableId ?? '0') as number;

  const [tab, setTab] = useState<TabKey>(TabKey.BASE_INFO);

  const { data, refresh } = useRequest(
    async () => {
      const data = await GenGetInfo({ tableId });

      return data as unknown as GenInfoDto;
    },
    {
      ready: tableId > 0,
      refreshDeps: [tableId],
    },
  );

  const { mutateAsync, isLoading } = useMutation(
    async (params: Partial<API.GenTableReq>) => {
      await GenPostEdit({
        tableId,
        businessName: data!.info!.businessName,
        functionName: data!.info!.functionName,
        className: data!.info!.className,
        functionAuthor: data!.info!.functionAuthor,
        moduleName: data!.info!.moduleName,
        packageName: data!.info!.packageName,
        tableComment: data!.info!.tableComment,
        tableName: data!.info!.tableName,
        // @ts-ignore
        columns: data!.rows,
        ...params,
      });
    },
    {
      onSuccess: () => {
        refresh();
        message.success('保存成功');
      },
    },
  );

  return (
    <PageContainer>
      <ProCard
        tabs={{
          activeKey: tab,
          onChange: (key) => {
            setTab(key as TabKey);
          },
        }}
      >
        <ProCard.TabPane tab={TabName[TabKey.BASE_INFO]} key={TabKey.BASE_INFO}>
          <DescBase dataSource={data?.info} handleEdit={mutateAsync} />
        </ProCard.TabPane>

        <ProCard.TabPane tab={TabName[TabKey.FIELD_INFO]} key={TabKey.FIELD_INFO}>
          <EditableTableField dataSource={data?.rows} handleEdit={mutateAsync} loading={isLoading} />
        </ProCard.TabPane>
      </ProCard>
    </PageContainer>
  );
};

export default GenEditPage;
