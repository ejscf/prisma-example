import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function Teste() {
prisma.user.create({
  data: {
    name: 'Edson',
    email: 'edsontestezinho@gmail.com',
    posts: {
      create: { title: 'Hello World' },
    },
  },
}).then(() => {
  console.log("User criado com sucesso!")
}) // Criando um User

const allUsers = await prisma.user.findMany({
  include: {
    posts: false
  },
}) // Pegando as informações do User criado

console.dir(allUsers, { depth: null })
}

Teste()
