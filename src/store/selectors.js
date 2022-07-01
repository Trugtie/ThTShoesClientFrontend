import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state) => state.filters.search;
export const categorySelector = (state) => state.filters.category;
export const typeSelector = (state) => state.filters.type;
export const priceSelector = (state) => state.filters.price;
export const shoesListSelector = (state) => state.shoesList.shoesList.giays;
export const userStatusSelector = (state) => state.user.status;
export const userSelector = (state) => state.user.current;
export const cartSelector = (state) => state.cart.list;
export const totalCartSelector = (state) => state.cart.totalCart;

export const shoesDetailSelector = (id) => {
  return (state) =>
    state.shoesList.shoesList.giays.find((shoes) => shoes.magiay === id);
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
