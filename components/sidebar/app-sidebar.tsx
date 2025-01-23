"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Home,
  ImageDown,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/sidebar/nav-main"
import { NavProjects } from "@/components/sidebar/nav-projects"
import { TeamSwitcher } from "@/components/sidebar/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import Image from "next/image"

// This is sample data.
const data = {
  teams: [
    {
      logo: '/logo1.png',
    },
  ],
  navMain: [
    {
      title: "Cloud Horizon",
      url: "/",
      icon: Home,
      isActive: false,
      items: [
        {
          title: "Home",
          url: "/",
        },
        {
          title: "Gallery",
          url: "/gallery",
        },
      ],
    },
   
    {
      title: "Effects",
      url: "#",
      icon: ImageDown,
      items: [
        {
          title: "Generative Fill",
          url: "/gallery",
        },
        {
          title: "Gray Scale",
          url: "/gallery",
        },
        {
          title: "Overlay",
          url: "/gallery",
        },
        {
          title: "Pixelate",
          url: "/gallery",
        },
      ],
    },
    
  ],
 
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar  collapsible="icon" {...props}>
      <SidebarHeader className="dark:bg-black">
        <Image height={500} width={500} src={data.teams[0].logo}  alt="logo" />
      </SidebarHeader>
      <SidebarContent className="dark:bg-black">
        <NavMain items={data.navMain} />
      </SidebarContent>
      
      <SidebarRail />
    </Sidebar>
  )
}
