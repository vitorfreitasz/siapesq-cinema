import { generateToken } from "@/constants/auth";
import { prisma } from "@/constants/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, password, email } = await req.json();

  if (!username || !password) {
    return NextResponse.json(
      { message: "Usuário e senha obrigatórios" },
      { status: 400 }
    );
  }

  const existingUser = await prisma.user.findUnique({ where: { username } });
  if (existingUser) {
    return NextResponse.json({ message: "Usuário já existe" }, { status: 409 });
  }

  const user = await prisma.user.create({
    data: { username, password, email },
  });

  const token = generateToken({ username });

  return NextResponse.json(
    { message: "Usuário registrado com sucesso", token: token },
    { status: 201 }
  );
}
