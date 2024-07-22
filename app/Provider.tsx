"use client";

import Loader from "@/components/Loader";
import { LiveblocksProvider } from "@liveblocks/react";
import { RoomProvider } from "@liveblocks/react";
import { ClientSideSuspense } from "@liveblocks/react";
import React, { ReactNode } from "react";


const Provider = ({ children } : { children : ReactNode}) => {
  return (
    <LiveblocksProvider authEndpoint={"/api/liveblocks-auth"}>
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<Loader/>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  )
}

export default Provider
