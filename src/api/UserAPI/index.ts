import AxiosClient from '../AxiosClient';
import { userInfo } from '@src/types';

const UserAPI = {
  async requestGetUser({ user, id }: { user?: userInfo; id?: string }) {
    const response = await AxiosClient(`user/find/${id}`, {
      method: 'GET',
      headers: {
        token: `Bearer ${user?.accessToken}`,
      },
    });
    return response.data;
  },

  async requestUpdateUser({ user, info }: { user: userInfo; info: userInfo }) {
    return await AxiosClient(`user/${user.myInfo?._id}`, {
      method: 'PUT',
      data: info,
      headers: {
        token: `Bearer ${user?.accessToken}`,
      },
    });
  },
};

export default UserAPI;
