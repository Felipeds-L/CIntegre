import bcrypt from 'bcryptjs';
// serve para comparar a senha do usuário com o hash armazenado no banco de dados
export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};