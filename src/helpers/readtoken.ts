import Jwt from 'jsonwebtoken';
import { UserJwt } from '../interfaces/userJwt';

const JWT_SECRET = 'SenhaSegura456!';

const readToken = (token: string) => {
  const info = Jwt.verify(token, JWT_SECRET);
  return info as UserJwt;
};

export default readToken;