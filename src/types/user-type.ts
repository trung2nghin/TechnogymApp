type myInfo = {
  _id: string;
  username: string;
  email: string;
  admin: boolean;
  createAt: string;
  updatedAt: string;
  address?: string;
  gender?: string;
  password?: string;
  __v: number;
};

export type userInfo = {
  myInfo?: myInfo | null;
  accessToken?: string;
};
