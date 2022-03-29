import Jwt from 'jsonwebtoken';
import Login from '../interfaces/loginInterface';

const JWT_SECRET = 'SenhaSegura456!';

const readToken = (token: string) => {
  const info = Jwt.verify(token, JWT_SECRET);
  return info as Login;
};

export default readToken;