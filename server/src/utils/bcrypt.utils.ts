import bcrypt from 'bcryptjs';
// serve para comparar a senha do usuário com o hash armazenado no banco de dados
export const comparePassword = async (
  password: string,
  hash: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};

// serve para gerar o hash da senha do usuário antes de armazená-la no banco de dados
export const hashPassword = async (password: string): Promise<string> => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};
