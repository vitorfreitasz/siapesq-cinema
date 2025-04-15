import { generateToken } from "@/constants/auth";
import { prisma } from "@/constants/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { username, password } = body;

  if (!username || !password) {
    return NextResponse.json(
      { message: "Usuário e senha são obrigatórios." },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({ where: { username: username } });

  if (!user || user.password !== password) {
    return NextResponse.json(
      { message: "Credenciais inválidas." },
      { status: 401 }
    );
  }
  const token = generateToken({ username });

  return NextResponse.json(
    { message: "Login realizado com sucesso!", token: token },
    { status: 200 }
  );
}
