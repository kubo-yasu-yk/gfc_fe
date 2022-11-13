const bannerList = [
  "/image/feature/banner1.jpg",
  "/image/feature/banner2.jpg",
  "/image/feature/banner3.jpg",
  "/image/feature/banner4.jpg",
];

export interface BannerData {
  bannerList: string[];
}

export function getBannerData() {
  return {
    bannerList: bannerList,
  };
}
