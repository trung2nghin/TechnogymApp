type myInfo = {
  _id: string;
  username: string;
  email: string;
  admin: boolean;
  createAt: string;
  updatedAt: string;
  __v: number;
};

export type userInfo = {
  myInfo?: myInfo | null;
  accessToken?: string;
};
