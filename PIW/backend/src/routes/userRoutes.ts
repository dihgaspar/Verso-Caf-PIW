import { Router } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/user';

const router = Router();

// ---> Listar usuários
router.get('/users', async (req, res) => {
  const users = await getRepository(User).find();
  res.json(users);
});

// ---> Listar um usuário
router.get('/users/:id', async (req, res) => {
  const {id} = req.params;
  const user = await getRepository(User).findOne(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }
});

// ---> Criar usuário
router.post('/users', async (req, res) => {
  const user = getRepository(User).create(req.body);
  const result = await getRepository(User).save(user);
  res.json(result);
});

// ---> Atualizar usuário
router.put('/users/:id', async (req, res) => {
  const user = await getRepository(User).findOne(req.params.id);
  if (user) {
    getRepository(User).merge(user, req.body);
    const result = await getRepository(User).save(user);
    res.json(result);
  } else {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }
});

// ---> Remover usuário
router.delete('/users/:id', async (req, res) => {
  const result = await getRepository(User).delete(req.params.id);
  res.json(result);
});

export default router;