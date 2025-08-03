import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t">
       <div className="container mx-auto text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} ADmyBRAND Inc. All rights reserved.</p>
       </div>
    </footer>
  );
};