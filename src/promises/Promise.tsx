import type { LucideProps } from "lucide-react";
import React from "react";
import "./promise.css";

type Props = {
  title?: string;
  icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  children?: React.ReactNode;
};

const Promise = ({ title, icon: Icon, children }: Props) => {
  return (
    <div className="promiseRoot">
      {Icon && (
        <div className="promiseIcon">
          <Icon size={20} />
        </div>
      )}
      <div className="promiseRightContainer">
        {title && <div className="promiseTitle">{title}</div>}
        <div className="promiseContent">{children}</div>
      </div>
    </div>
  );
};

export default Promise;
