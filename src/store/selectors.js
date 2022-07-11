import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state) => state.filters.search;
export const categorySelector = (state) => state.filters.category;
export const typeSelector = (state) => state.filters.type;
export const priceSelector = (state) => state.filters.price;
export const shoesListSelector = (state) => state.shoesList.shoesList.giays;
export const shoesTypesSelector = (state) => state.shoesList.types;
export const accessoriesSelector = (state) => state.accessories.list;
export const accessoriesTypesSelector = (state) => state.accessories.types;
export const userStatusSelector = (state) => state.user.status;
export const userHistorySelector = (state) => state.user.history;
export const userSelector = (state) => state.user.current;
export const cartSelector = (state) => state.cart.list;
export const totalCartSelector = (state) => state.cart.totalCart;
export const eventSelector = (state) => state.event.list;
export const giayLatestSelector = (state) =>
  state.shoesList.shoesListHomepage.giayLatest;
export const giayBestSellsSelector = (state) =>
  state.shoesList.shoesListHomepage.giayBestSells;
export const phuKienLatestSelector = (state) =>
  state.shoesList.shoesListHomepage.phuKienLatest;
export const shoesDetailSelector = (id) => {
  return (state) =>
    state.shoesList.shoesList.giays.find((shoes) => shoes.magiay === id);
};
export const accessoryDetailSelector = (id) => {
  return (state) =>
    state.accessories.list.find((accessory) => accessory.mapk === id);
};
export const eventDetailSelector = (id) => {
  return (state) => state.event.list.find((event) => event.makm === id);
};
export const historyDetailSelector = (id) => {
  return (state) => state.user.history.find((history) => history.madon === id);
};

export const shoesListRemainingSelector = createSelector(
  shoesListSelector,
  searchTextSelector,
  categorySelector,
  typeSelector,
  priceSelector,
  (shoesList, searchText, category, type, price) => {
    return shoesList.filter((shoes) => {
      if (type.length === 0 && category === null)
        return (
          shoes.tengiay.toLowerCase().includes(searchText.toLowerCase()) &&
          shoes.gia >= price[0] &&
          shoes.gia <= price[1]
        );
      else if (category === null)
        return (
          shoes.tengiay.toLowerCase().includes(searchText.toLowerCase()) &&
          type.includes(shoes.loaigiayHangDanhmuc.loaigiay.tenloai) &&
          shoes.gia >= price[0] &&
          shoes.gia <= price[1]
        );
      else if (type.length === 0)
        return (
          shoes.tengiay.toLowerCase().includes(searchText.toLowerCase()) &&
          shoes.loaigiayHangDanhmuc.danhmuc.tendanhmuc === category &&
          shoes.gia >= price[0] &&
          shoes.gia <= price[1]
        );
      return (
        shoes.tengiay.toLowerCase().includes(searchText.toLowerCase()) &&
        shoes.loaigiayHangDanhmuc.danhmuc.tendanhmuc === category &&
        type.includes(shoes.loaigiayHangDanhmuc.loaigiay.tenloai) &&
        shoes.gia >= price[0] &&
        shoes.gia <= price[1]
      );
    });
  }
);

export const accessoriesListRemainingSelector = createSelector(
  accessoriesSelector,
  searchTextSelector,
  categorySelector,
  typeSelector,
  priceSelector,
  (accessories, searchText, category, type, price) => {
    return accessories.filter((accessory) => {
      if (type.length === 0 && category === null)
        return (
          accessory.tenpk.toLowerCase().includes(searchText.toLowerCase()) &&
          accessory.gia >= price[0] &&
          accessory.gia <= price[1]
        );
      else if (category === null)
        return (
          accessory.tenpk.toLowerCase().includes(searchText.toLowerCase()) &&
          type.includes(accessory.loaiPhuKien.tenLoaiPhuKien) &&
          accessory.gia >= price[0] &&
          accessory.gia <= price[1]
        );
      else if (type.length === 0)
        return (
          accessory.tenpk.toLowerCase().includes(searchText.toLowerCase()) &&
          accessory.gia >= price[0] &&
          accessory.gia <= price[1]
        );
      return (
        accessory.tenpk.toLowerCase().includes(searchText.toLowerCase()) &&
        type.includes(accessory.loaiPhuKien.tenLoaiPhuKien) &&
        accessory.gia >= price[0] &&
        accessory.gia <= price[1]
      );
    });
  }
);
