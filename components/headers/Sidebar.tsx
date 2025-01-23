import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  import { Separator } from "@/components/ui/separator";
  import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
  } from "@/components/ui/sidebar";
  import { AppSidebar } from "../sidebar/app-sidebar";
  
  export default function Sidebar() {
	return (
	  <SidebarProvider>
		<AppSidebar />
		<SidebarInset>
		  <header className="flex h-16 shrink-0 items-center gap-4 px-4 ">
			<SidebarTrigger className="ml-2" />
			<Separator orientation="vertical" className="h-6 " />
			
		  </header>
		</SidebarInset>
	  </SidebarProvider>
	);
  }
  