import { LogoutIcon, SettingsIcon } from '@/components';
import { SysLoginGetInfo, SysLoginGetRouters } from '@/services/sys/SysLoginService';
import type { InitialState } from '@/types';
import { checkToken, convertUserRoutesToMenus } from '@/utils';
import { GithubOutlined } from '@ant-design/icons';
import type { ProLayoutProps } from '@ant-design/pro-layout';
import { DefaultFooter } from '@ant-design/pro-layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { history } from '@umijs/max';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import type { ReactNode } from 'react';
import { createElement } from 'react';
import type { RecoilRootProps } from 'recoil';
import { RecoilRoot } from 'recoil';
import { publicRoutes } from '../config/routes';

dayjs.locale('zh-cn');

const queryClient = new QueryClient();

export const render = (oldRender: () => void) => {
  const hasLogin = checkToken();
  const isLoginPage = window.location.pathname === LOGIN_PATH_NAME;

  if (!hasLogin && !isLoginPage) {
    window.location.replace(`${LOGIN_PATH_NAME}?redirect=${window.location.pathname}`);
    return;
  }

  oldRender();
};

export const getInitialState = async (): Promise<InitialState | undefined> => {
  const hasLogin = checkToken();

  if (!hasLogin) {
    return;
  }

  const [userInfo, userRoutes] = await Promise.all([SysLoginGetInfo(), SysLoginGetRouters()]);

  return {
    userInfo,
    userRoutes,
  };
};

export const rootContainer = (container: ReactNode, opts: RecoilRootProps) => {
  return createElement(RecoilRoot, opts, container);
};

export const dataflowProvider = (container: ReactNode) => {
  return createElement(QueryClientProvider, { client: queryClient }, container);
};

export const layout = ({ initialState }: { initialState: InitialState }): ProLayoutProps => {
  if (!initialState) return {};

  const { userInfo, userRoutes } = initialState;

  return {
    avatarProps: {
      src: userInfo.user.avatar,
      size: 'small',
      title: userInfo.user.nickName,
    },
    rightContentRender: false,
    layoutBgImgList: [
      {
        src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    onMenuHeaderClick: () => history.push('/'),
    actionsRender: () => [<SettingsIcon key="SettingsIcon" />, <LogoutIcon key="LogoutIcon" />],
    menuDataRender: () => [...publicRoutes, ...convertUserRoutesToMenus(userRoutes)],
    footerRender: () => (
      <DefaultFooter
        links={[
          { key: 'Github', title: <GithubOutlined />, href: 'https://github.com/QNAV/RuoYi-X-Umi', blankTarget: true },
        ]}
        copyright="2022 Sushi Su"
      />
    ),
  };
};
