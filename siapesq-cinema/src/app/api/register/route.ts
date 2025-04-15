import { generateToken } from "@/constants/auth";
import { users } from "@/constants/users";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json(
      { message: "Usuário e senha obrigatórios" },
      { status: 400 }
    );
  }

  const exists = users.find((u) => u.username === username);
  if (exists) {
    return NextResponse.json({ message: "Usuário já existe" }, { status: 409 });
  }

  users.push({ username, password });
  const token = generateToken({ username });

  return NextResponse.json(
    { message: "Usuário registrado com sucesso", token: token },
    { status: 201 }
  );
}
