'use client';
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { useActionState } from "react";
import { updateUserProfile } from "@/actions/userprofile";
import { useToast } from "@/hooks/use-toast";
import { SubmitButton } from "./SubmitButton";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Link from "next/link";


interface SubFormProps {
    firstName?: string;
    lastName?: string;
    email?: string;
}

const initialState = {
    message: "",
    status: "",
};
 
const SubForm = ({firstName, lastName, email}: SubFormProps) => {
    const [state, dispatch] = useActionState(updateUserProfile, initialState);
    const { toast } = useToast();

    useEffect(() => {
        if (state?.status === "green") {
          toast({
            title: "Succesfull",
            description: state.message,
          });
        } else if (state?.status === "error") {
          toast({
            title: "Error",
            description: state.message,
            variant: "destructive",
          });
        }
    }, [state, toast]);

    return (
        
        <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center gap-4">
           
            <div>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Manage your account settings</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
        <form action={dispatch}>
            <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue={firstName ?? undefined} name="firstName" />
                {state?.status === "error" && (
                    <p className="text-destructive mt-1">{state.message}</p>
                )}
            </div>
            <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue={lastName ?? undefined} name="lastName" />
                {state?.status === "error" && (
                    <p className="text-destructive mt-1">{state.message}</p>
                )}
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue={email ?? undefined} name="email" />
                {state?.status === "error" && (
                    <p className="text-destructive mt-1">{state.message}</p>
                )}
            </div>
            <SubmitButton text="Save" />    
        </form>
        </CardContent>
        <CardFooter className="flex justify-between">
            <Link href="/">
          <Button   type="submit" variant="outline">Cancel</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
    );
};

export default SubForm;
