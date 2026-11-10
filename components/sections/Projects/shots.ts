export type Screenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Página inteira: rola dentro da moldura ao passar o mouse. */
  scroll?: boolean;
};

/** Um slide do carrossel: cada perfil do sistema, no navegador ou no celular. */
export type GallerySlide = Screenshot & {
  label: string;
  platform: string;
  address: string;
  device?: "browser" | "phone";
};

// A moldura segue a proporção do print da Tabela de preços (1440×810).
export const SCREEN_RATIO = 9 / 16;
// Tela do celular no mockup (390×844, proporção de um iPhone).
export const PHONE_RATIO = 844 / 390;

/** Quanto a imagem sobe (em % da própria altura) para mostrar o fim da página. */
export function scrollDistance({ width, height }: Screenshot, ratio = SCREEN_RATIO) {
  return `-${(((height - width * ratio) / height) * 100).toFixed(3)}%`;
}
