export const gradientColors = {
  primary_gradient:
    'linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%)',
  tertiary_gradient:
    'linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)',
  sunset_gradient: 'linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3)',
  fire_gradient:
    'linear-gradient(45deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
  purple_gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  green_gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
  blue_gradient:
    'linear-gradient(160deg, rgb(0, 147, 233) 0%, rgb(128, 208, 199) 100%)',
  light_blue_gradient:
    'linear-gradient(62deg, rgb(142, 197, 252) 0%, rgb(224, 195, 252) 100%)',
  light_pink_gradient:
    'linear-gradient(0deg, rgb(217, 175, 217) 0%, rgb(151, 217, 225) 100%)',
  medium_pink_gradient:
    'linear-gradient(90deg, rgb(0, 219, 222) 0%, rgb(252, 0, 255) 100%)',
  yellow_gradient:
    'linear-gradient(62deg, rgb(251, 171, 126) 0%, rgb(247, 206, 104) 100%)',
  light_yellow_green_gradient:
    'linear-gradient(45deg, rgb(133, 255, 189) 0%, rgb(255, 251, 125) 100%)',
  blue_purple_gradient:
    'linear-gradient(19deg, rgb(33, 212, 253) 0%, rgb(183, 33, 255) 100%)',
  orange_gradient:
    'linear-gradient(45deg, rgb(251, 218, 97) 0%, rgb(255, 90, 205) 100%)',
  // Radial gradients
  radial_warm_gradient:
    'radial-gradient(circle at center, rgba(255, 204, 112, 0.8) 0%, rgba(200, 80, 192, 0.6) 50%, rgba(65, 88, 208, 0.4) 100%)',
  radial_bold_gradient:
    'radial-gradient(circle at center, rgba(255, 100, 50, 0.9) 0%, rgba(255, 0, 101, 0.7) 50%, rgba(123, 46, 255, 0.5) 100%)',
  radial_soft_gradient:
    'radial-gradient(circle at center, rgba(255, 204, 112, 0.6) 0%, rgba(200, 80, 192, 0.4) 30%, rgba(255, 255, 255, 0.2) 100%)',
  radial_purple_gradient:
    'radial-gradient(circle at center, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.6) 100%)',
  radial_orange_pink_gradient:
    'radial-gradient(circle at center, rgba(251, 218, 97, 0.9) 0%, rgba(255, 90, 205, 0.7) 100%)',
};

export type GradientKey = keyof typeof gradientColors;

