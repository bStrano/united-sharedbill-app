import { IconsEnum } from "libs/united-sharedbill-core/src/shared/enums/icons.enum";
import React from "react";
import { SvgProps } from "react-native-svg";

export const svgMap: {
  [key in IconsEnum]: React.LazyExoticComponent<React.FC<SvgProps>>;
} = {
  lock: React.lazy(() => import(`../../../assets/icons/lock.svg`)),
  eye: React.lazy(() => import(`../../../assets/icons/eye.svg`)),
  eye_slash: React.lazy(() => import(`../../../assets/icons/eye-slash.svg`)),
  person: React.lazy(() => import(`../../../assets/icons/person.svg`)),
  key: React.lazy(() => import(`../../../assets/icons/key.svg`)),
};

export type IconProps = React.ComponentProps<React.FC<SvgProps>> & {
  name: keyof typeof IconsEnum;
};

export function DynamicSvgComponent({ ...props }: IconProps) {
  const Icon = svgMap[props.name];

  return (
    <React.Suspense>
      <Icon
        {...props}
        color={props.color || "#FFF"}
        width={props.width || 24}
        height={props.height || 24}
      />
    </React.Suspense>
  );
}
