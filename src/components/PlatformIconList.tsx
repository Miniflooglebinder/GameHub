import { Platform } from "@/hooks/useGames";
import { IconType } from "react-icons";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAppStoreIos,
  FaGlobe,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { IoLogoAndroid } from "react-icons/io";
import Icon from "@/components/Icon";

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: Record<string, IconType> = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    nintendo: BsNintendoSwitch,
    linux: FaLinux,
    android: IoLogoAndroid,
    ios: FaAppStoreIos,
    web: FaGlobe,
  };

  return (
    <span className="flex gap-1 mt-1">
      {platforms.map((platform) => {
        // Check that we have a map for this slug
        const iconComponent = iconMap[platform.slug];
        return (
          iconComponent && (
            <Icon key={platform.id} icon={iconComponent} className="text-muted-foreground size-5" />
          )
        );
      })}
    </span>
  );
};

export default PlatformIconList;
