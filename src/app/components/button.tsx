import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  className?: string;
  width?: string;
  height?: string;
  icon?:JSX.Element;
}

const Button = ({ text, href, className, width = "5rem", height = "2rem",icon }: ButtonProps) => {
  return (
    <div style={{ width, height }}>
      <Link
        href={href}
        className={`flex justify-center items-center text-center  ${className}`}
        style={{ width, height }}
      >
        <p className="px-1">{icon}</p>
        {text}
      </Link>
    </div>
  );
};

export default Button;
