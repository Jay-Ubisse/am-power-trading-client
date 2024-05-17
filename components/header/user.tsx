"use client";

import * as React from "react";
import { useSession } from "next-auth/react";

import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { signOut } from "next-auth/react";
import { UserCircle, SignOut, User as UserIcon } from "@phosphor-icons/react";
import { Button } from "../ui/button";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export const User = () => {
  const { data: session } = useSession();
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  if (!session) {
    return (
      <Link
        href={"/sign-in"}
        className="flex gap-1 items-center hover:text-primary"
      >
        <UserCircle weight="light" size={28} />
        <p className="text-sm">Entrar</p>
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2 hover:text-primary hover:cursor-pointer">
          <UserIcon weight="light" size={24} />
          <span>{session.user.name}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 py-4 mt-4">
        <p className="text-sm text-center mb-5">{session.user.email}</p>
        <DropdownMenuSeparator />
        <div className="w-fit mx-auto">
          <Button>Meus Pedidos</Button>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
          className="mt-5"
        >
          <button
            onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
            className="flex gap-2 w-full items-center"
          >
            <span>
              <SignOut weight="light" size={24} />
            </span>
            <span className="text-base">Sair</span>
          </button>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
