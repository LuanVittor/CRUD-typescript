import jwt from 'jsonwebtoken';
import JwtPayload from '../types/jwtType';

const JWT_SECRET = 'SenhaSegura456!';

const generateJwt = (payload: JwtPayload): string => {
  const token = jwt.sign({ data: payload }, JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

export default generateJwt;
