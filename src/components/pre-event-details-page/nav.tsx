type Props = {
  id: string;
  label: string;
  icon: string;
  isActive: boolean;
};

const NavItem = ({ id, label, icon, isActive }: Props) => {
  return (
    <a href={`#${id}`} className={isActive ? "active" : ""}>
      <i className={`fa ${icon}`}></i> {label}
    </a>
  );
};

export default NavItem;