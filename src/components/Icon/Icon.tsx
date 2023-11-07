import { IconsEnum } from "libs/united-sharedbill-core/src/shared/enums/icons.enum";
import React from "react";
import { SvgProps } from "react-native-svg";

export const svgMap: {
  [key in IconsEnum]: React.LazyExoticComponent<React.FC<SvgProps>>;
} = {
  medal: React.lazy(() => import("../../../assets/icons/1st-medal.svg")),
  accessibility_sign: React.lazy(
    () => import("../../../assets/icons/accessibility-sign.svg")
  ),
  airplane: React.lazy(() => import("../../../assets/icons/airplane.svg")),
  antenna: React.lazy(() => import("../../../assets/icons/antenna.svg")),
  arcade: React.lazy(() => import("../../../assets/icons/arcade.svg")),
  archery: React.lazy(() => import("../../../assets/icons/archery.svg")),
  arrow_archery: React.lazy(
    () => import("../../../assets/icons/arrow-archery.svg")
  ),
  attachment: React.lazy(() => import("../../../assets/icons/attachment.svg")),
  basketball: React.lazy(() => import("../../../assets/icons/basketball.svg")),
  bathroom: React.lazy(() => import("../../../assets/icons/bathroom.svg")),
  bbq: React.lazy(() => import("../../../assets/icons/bbq.svg")),
  binocular: React.lazy(() => import("../../../assets/icons/binocular.svg")),
  birthday_cake: React.lazy(
    () => import("../../../assets/icons/birthday-cake.svg")
  ),
  bonfire: React.lazy(() => import("../../../assets/icons/bonfire.svg")),
  book_stack: React.lazy(() => import("../../../assets/icons/book-stack.svg")),
  bowling_ball: React.lazy(
    () => import("../../../assets/icons/bowling-ball.svg")
  ),
  camera: React.lazy(() => import("../../../assets/icons/camera.svg")),
  car: React.lazy(() => import("../../../assets/icons/car.svg")),
  cart_alt: React.lazy(() => import("../../../assets/icons/cart-alt.svg")),
  chat_bubble_translate: React.lazy(
    () => import("../../../assets/icons/chat-bubble-translate.svg")
  ),
  church_alt: React.lazy(() => import("../../../assets/icons/church-alt.svg")),
  cinema_old: React.lazy(() => import("../../../assets/icons/cinema-old.svg")),
  code: React.lazy(() => import("../../../assets/icons/code.svg")),
  coffee_cup: React.lazy(() => import("../../../assets/icons/coffee-cup.svg")),
  coin: React.lazy(() => import("../../../assets/icons/coin.svg")),
  cycling: React.lazy(() => import("../../../assets/icons/cycling.svg")),
  delivery_truck: React.lazy(
    () => import("../../../assets/icons/delivery-truck.svg")
  ),
  dice_five: React.lazy(() => import("../../../assets/icons/dice-five.svg")),
  emoji: React.lazy(() => import("../../../assets/icons/emoji.svg")),
  emoji_ball: React.lazy(() => import("../../../assets/icons/emoji-ball.svg")),
  emoji_blink_left: React.lazy(
    () => import("../../../assets/icons/emoji-blink-left.svg")
  ),
  emoji_blink_right: React.lazy(
    () => import("../../../assets/icons/emoji-blink-right.svg")
  ),
  emoji_look_down: React.lazy(
    () => import("../../../assets/icons/emoji-look-down.svg")
  ),
  emoji_look_left: React.lazy(
    () => import("../../../assets/icons/emoji-look-left.svg")
  ),
  emoji_look_right: React.lazy(
    () => import("../../../assets/icons/emoji-look-right.svg")
  ),
  emoji_look_up: React.lazy(
    () => import("../../../assets/icons/emoji-look-up.svg")
  ),
  emoji_puzzled: React.lazy(
    () => import("../../../assets/icons/emoji-puzzled.svg")
  ),
  emoji_quite: React.lazy(
    () => import("../../../assets/icons/emoji-quite.svg")
  ),
  emoji_really: React.lazy(
    () => import("../../../assets/icons/emoji-really.svg")
  ),
  emoji_sad: React.lazy(() => import("../../../assets/icons/emoji-sad.svg")),
  emoji_satisfied: React.lazy(
    () => import("../../../assets/icons/emoji-satisfied.svg")
  ),
  emoji_sing_left: React.lazy(
    () => import("../../../assets/icons/emoji-sing-left.svg")
  ),
  emoji_sing_left_note: React.lazy(
    () => import("../../../assets/icons/emoji-sing-left-note.svg")
  ),
  emoji_sing_right: React.lazy(
    () => import("../../../assets/icons/emoji-sing-right.svg")
  ),
  emoji_sing_right_note: React.lazy(
    () => import("../../../assets/icons/emoji-sing-right-note.svg")
  ),
  emoji_surprise: React.lazy(
    () => import("../../../assets/icons/emoji-surprise.svg")
  ),
  emoji_surprise_alt: React.lazy(
    () => import("../../../assets/icons/emoji-surprise-alt.svg")
  ),
  emoji_talking_angry: React.lazy(
    () => import("../../../assets/icons/emoji-talking-angry.svg")
  ),
  emoji_talking_happy: React.lazy(
    () => import("../../../assets/icons/emoji-talking-happy.svg")
  ),
  emoji_think_left: React.lazy(
    () => import("../../../assets/icons/emoji-think-left.svg")
  ),
  eye: React.lazy(() => import("../../../assets/icons/eye.svg")),
  eye_slash: React.lazy(() => import("../../../assets/icons/eye-slash.svg")),
  favourite_book: React.lazy(
    () => import("../../../assets/icons/favourite-book.svg")
  ),
  fish: React.lazy(() => import("../../../assets/icons/fish.svg")),
  flower: React.lazy(() => import("../../../assets/icons/flower.svg")),
  football_ball: React.lazy(
    () => import("../../../assets/icons/football-ball.svg")
  ),
  gamepad: React.lazy(() => import("../../../assets/icons/gamepad.svg")),
  gift: React.lazy(() => import("../../../assets/icons/gift.svg")),
  glasses: React.lazy(() => import("../../../assets/icons/glasses.svg")),
  golf: React.lazy(() => import("../../../assets/icons/golf.svg")),
  graph_down: React.lazy(() => import("../../../assets/icons/graph-down.svg")),
  graph_up: React.lazy(() => import("../../../assets/icons/graph-up.svg")),
  gym: React.lazy(() => import("../../../assets/icons/gym.svg")),
  half_moon: React.lazy(() => import("../../../assets/icons/half-moon.svg")),
  hammer: React.lazy(() => import("../../../assets/icons/hammer.svg")),
  headset: React.lazy(() => import("../../../assets/icons/headset.svg")),
  heart: React.lazy(() => import("../../../assets/icons/heart.svg")),
  her_slips: React.lazy(() => import("../../../assets/icons/her-slips.svg")),
  home: React.lazy(() => import("../../../assets/icons/home.svg")),
  hospital: React.lazy(() => import("../../../assets/icons/hospital.svg")),
  jellyfish: React.lazy(() => import("../../../assets/icons/jellyfish.svg")),
  key: React.lazy(() => import("../../../assets/icons/key.svg")),
  large_suitcase: React.lazy(
    () => import("../../../assets/icons/large-suitcase.svg")
  ),
  lock: React.lazy(() => import("../../../assets/icons/lock.svg")),
  locked_book: React.lazy(
    () => import("../../../assets/icons/locked-book.svg")
  ),
  magic_wand: React.lazy(() => import("../../../assets/icons/magic-wand.svg")),
  missing_font: React.lazy(
    () => import("../../../assets/icons/missing-font.svg")
  ),
  nintendo_switch: React.lazy(
    () => import("../../../assets/icons/nintendo-switch.svg")
  ),
  pacman: React.lazy(() => import("../../../assets/icons/pacman.svg")),
  palette: React.lazy(() => import("../../../assets/icons/palette.svg")),
  pants: React.lazy(() => import("../../../assets/icons/pants.svg")),
  person: React.lazy(() => import("../../../assets/icons/person.svg")),
  piggy_bank: React.lazy(() => import("../../../assets/icons/piggy-bank.svg")),
  pizza_slice: React.lazy(
    () => import("../../../assets/icons/pizza-slice.svg")
  ),
  playstation_gamepad: React.lazy(
    () => import("../../../assets/icons/playstation-gamepad.svg")
  ),
  pokeball: React.lazy(() => import("../../../assets/icons/pokeball.svg")),
  presentation: React.lazy(
    () => import("../../../assets/icons/presentation.svg")
  ),
  printing_page: React.lazy(
    () => import("../../../assets/icons/printing-page.svg")
  ),
  running: React.lazy(() => import("../../../assets/icons/running.svg")),
  scissor: React.lazy(() => import("../../../assets/icons/scissor.svg")),
  shop_alt: React.lazy(() => import("../../../assets/icons/shop-alt.svg")),
  short_pants: React.lazy(
    () => import("../../../assets/icons/short-pants.svg")
  ),
  skateboarding: React.lazy(
    () => import("../../../assets/icons/skateboarding.svg")
  ),
  sleeper_chair: React.lazy(
    () => import("../../../assets/icons/sleeper-chair.svg")
  ),
  smoking: React.lazy(() => import("../../../assets/icons/smoking.svg")),
  soccer_ball: React.lazy(
    () => import("../../../assets/icons/soccer-ball.svg")
  ),
  spades: React.lazy(() => import("../../../assets/icons/spades.svg")),
  spock_hand_gesture: React.lazy(
    () => import("../../../assets/icons/spock-hand-gesture.svg")
  ),
  spotify: React.lazy(() => import("../../../assets/icons/spotify.svg")),
  star: React.lazy(() => import("../../../assets/icons/star.svg")),
  stroller: React.lazy(() => import("../../../assets/icons/stroller.svg")),
  tennis_ball: React.lazy(
    () => import("../../../assets/icons/tennis-ball.svg")
  ),
  tennis_ball_alt: React.lazy(
    () => import("../../../assets/icons/tennis-ball-alt.svg")
  ),
  tools: React.lazy(() => import("../../../assets/icons/tools.svg")),
  treadmill: React.lazy(() => import("../../../assets/icons/treadmill.svg")),
  trekking: React.lazy(() => import("../../../assets/icons/trekking.svg")),
  trophy: React.lazy(() => import("../../../assets/icons/trophy.svg")),
  truck: React.lazy(() => import("../../../assets/icons/truck.svg")),
  t_shirt: React.lazy(() => import("../../../assets/icons/t-shirt.svg")),
  tv: React.lazy(() => import("../../../assets/icons/tv.svg")),
  waist: React.lazy(() => import("../../../assets/icons/waist.svg")),
  walking: React.lazy(() => import("../../../assets/icons/walking.svg")),
  wolf: React.lazy(() => import("../../../assets/icons/wolf.svg")),
  wristwatch: React.lazy(() => import("../../../assets/icons/wristwatch.svg")),
};

export type IconProps = React.ComponentProps<React.FC<SvgProps>> & {
  name: keyof typeof IconsEnum;
};

export function DynamicSvgComponent({ ...props }: IconProps) {
  const Icon = svgMap[props.name] || svgMap["home"];

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
