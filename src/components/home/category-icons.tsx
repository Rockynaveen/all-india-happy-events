import { IconApple, IconCake, IconMapPinCheck, IconMusic, IconWoman } from "@tabler/icons-react";

export default function CategoryIcons() {
  return (
    <div className="slider-category">
      <a href="#"><IconCake /></a>
      <a href="#"><IconWoman/></a>
      <a href="#"><IconApple/></a>
      <a href="#"><IconMusic/></a>
      <a href="#"><IconMapPinCheck/></a>
      <a href="#" className="more-icon">
        <i className="fa fa-ellipsis-h"></i>
      </a>
    </div>
  );
}