export interface UserJwt {
  data: Data,
  id:number,
  // username: string,
}

interface Data {
  id: number;
  username: string;
}

export default UserJwt;