import Fastify from "fastify";
import cors from "@fastify/cors";
import { string, z } from "zod"
import { PrismaClient } from "@prisma/client";
import ShortUniqueId from "short-unique-id";

const prisma = new PrismaClient({
  log: ["query"],
});

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  fastify.get("/pools/count", async () => {
    const count = await prisma.pool.count();
    
    return { count };
  });

  fastify.get("/users/count", async () => {
    const count = await prisma.user.count();
    
    return { count };
  });

  fastify.get("/guesses/count", async () => {
    const count = await prisma.guess.count();
    
    return { count };
  });

  fastify.post("/pools", async (req, rep) => {
    try {
      const createPoolBody = z.object({
        title: z.string(),
      })
      const { title } = createPoolBody.parse(req.body)

      const generate = new ShortUniqueId({ length: 6 })
      const code = String(generate()).toUpperCase()

      await prisma.pool.create({
        data: {
          title,
          code
        }
      })
  
      return rep.status(201).send({ code })

    } catch (error) {
      console.error(error, "Error creating pool, invalid title")
    }
    
  });

  await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();
