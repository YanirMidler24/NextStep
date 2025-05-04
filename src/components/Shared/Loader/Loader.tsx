import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Loader = ({ className = "" }: { className?: string }) => {
    return (
        <div className="flex items-center justify-center" data-testid="loader">
            <Loader2 className={cn(`animate-spin text-white h-6 w-6`, className)} />
        </div>
    );
};

export default Loader;
