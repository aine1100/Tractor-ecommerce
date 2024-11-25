interface SidebarProps {
    icon: JSX.Element;
    title: string;
    isActive: boolean;
    onClick: () => void;
  }
  
  export default function Sidebar2({ icon, title, isActive, onClick }: SidebarProps) {
    return (
      <div
        className={`flex items-center gap-2 p-4 cursor-pointer  hover:bg-gray-200 ${isActive ? "bg-green-700 text-white" : "text-gray-600"}`}
        onClick={onClick}
      >
        <div className="text-xl">{icon}</div>
        <p className="text-sm">{title}</p>
      </div>
    );
  }
  