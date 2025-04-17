"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { logOutAction } from "@/actions/users";

function LogOutButton() {
  const router = useRouter();
  const [loading, setloading] = useState(false);

  const handleLogOut = async () => {
    setloading(true);

    const { errorMessage } = await logOutAction();

    if (!errorMessage) {
      toast.success("Logged out successfully", {
        description: "You have been logged out.",
      });
      router.push("/");
    } else {
      toast.error("Error logging out", {
        description: "Was an error logging out.",
      });
    }

    setloading(false);
  };
  return (
    <div>
      <Button
        className="w-24"
        variant="outline"
        onClick={() => handleLogOut()}
        disabled={loading}
      >
        {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
      </Button>
    </div>
  );
}

export default LogOutButton;
