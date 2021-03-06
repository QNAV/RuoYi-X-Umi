import {
  CColumnComment,
  CColumnName,
  CColumnType,
  CIsEdit,
  CIsInsert,
  CIsList,
  CIsQuery,
  CIsRequired,
  CJavaField,
  CJavaType,
  CQueryType,
  CSort,
} from '@/columns';
import type { GenTableColumnRes } from '@/pages/tool/gen-edit/data';
import { CloseOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';
import { EditableProTable } from '@ant-design/pro-components';
import { Button, Form } from 'antd';
import type { FC, Key } from 'react';
import { useState } from 'react';

const EditableTableField: FC<{
  dataSource?: GenTableColumnRes[];
  loading?: boolean;
  handleEdit: (p: Partial<API.GenTableReq>) => Promise<void>;
}> = ({ dataSource, handleEdit, loading = false }) => {
  const [form] = Form.useForm();
  const [editableKeys, setEditableRowKeys] = useState<Key[]>([]);

  const isEditing = editableKeys?.length > 0;

  return (
    <EditableProTable
      toolbar={{
        actions: isEditing
          ? [
              <Button key="cancelEdit" onClick={() => setEditableRowKeys([])} icon={<CloseOutlined />}>
                取消编辑
              </Button>,
              <Button
                type="primary"
                key="edit"
                loading={loading}
                icon={<SaveOutlined />}
                onClick={async () => {
                  const res = await form.validateFields();

                  await handleEdit({
                    columns: Object.keys(res).map((key) => {
                      return { ...res[key], columnId: Number(key) };
                    }),
                  });

                  setEditableRowKeys([]);
                }}
              >
                保存
              </Button>,
            ]
          : [
              <Button
                icon={<EditOutlined />}
                type="primary"
                key="edit"
                onClick={() => {
                  if (dataSource) {
                    setEditableRowKeys(dataSource?.map((item) => item?.columnId?.toString() ?? ''));
                  }
                }}
              >
                编辑
              </Button>,
            ],
      }}
      rowKey="columnId"
      ghost
      size="small"
      scroll={{ x: 'max-content' }}
      columns={[
        CSort,
        CColumnName,
        CColumnComment,
        CColumnType,
        CJavaType,
        CJavaField,
        CIsInsert,
        CIsEdit,
        CIsList,
        CIsQuery,
        CIsRequired,
        CQueryType,
      ]}
      value={dataSource}
      recordCreatorProps={false}
      editable={{
        form,
        editableKeys,
      }}
    />
  );
};

export default EditableTableField;
