import { ReactNode } from "react";

interface NavbarRootProps {
    children: ReactNode

}

export function NavbarRoot({ children }: NavbarRootProps) {

    return (
        <div className="flex flex-row justify-center h-20 space-x-20">
            {children}
        </div>
    );
}