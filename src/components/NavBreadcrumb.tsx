import Icon from "@/components/Icon";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

export interface Crumb {
  to: string;
  label: string;
}

interface Props {
  crumbs: Crumb | Crumb[];
}

const NavBreadcrumb = ({ crumbs }: Props) => {
  if (!Array.isArray(crumbs)) return <NavLink to={crumbs.to}>{crumbs.label}</NavLink>;

  return (
    <div className="flex gap-0.5 items-center">
      {crumbs.map((crumb, i) => (
        <React.Fragment key={crumb.to}>
          <NavLink
            to={crumb.to}
            className={({ isActive }) =>
              cn("hover:text-foreground", !isActive && "text-muted-foreground")
            }>
            {crumb.label}
          </NavLink>
          {!(i === crumbs.length - 1) && (
            <Icon icon={ChevronRight} className="text-muted-foreground mt-0.5 size-4" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavBreadcrumb;
