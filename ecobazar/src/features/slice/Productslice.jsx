import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../Data/Filterdata";
export const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: data,
    filteredProducts:
    
      JSON.parse(sessionStorage.getItem("filteredData")) || data,
      currentFilters: {
        tag: null,
        sort: null,
        category: null,
      },
    },
  reducers: {
    applyFilters(state) {
      let filtered = state.allProducts;
      const { tag, sort, category } = state.currentFilters;
      if (tag) {
        filtered = filtered.filter((product) => product.tag === tag);
      }
      if (sort) {
        filtered = filtered.filter((product) => product.sort === sort);
      }
      if (category) {
        filtered = filtered.filter((product) => product.category === category);
      }
      state.filteredProducts = filtered;
      sessionStorage.setItem("filteredData", JSON.stringify(filtered));
    },
    filterProducts(state, action) {
      state.currentFilters.tag = action.payload;
      productSlice.caseReducers.applyFilters(state);
    },
    sortFilter(state, action) {
      state.currentFilters.sort = action.payload;
      productSlice.caseReducers.applyFilters(state);
    },
    radioFilter(state, action) {
      state.currentFilters.category = action.payload;
      productSlice.caseReducers.applyFilters(state);
    },
    // filterProducts(state, action) {
    //   try {
    //     const filter = data.filter((product) => product.tag === action.payload);
    //     state.filteredProducts = filter;
    //     // console.log("filter", filter);
    //     const saveState = JSON.stringify(filter);
    //     sessionStorage.setItem("filteredData", saveState);
    //   } catch (err) {
    //     return err;
    //   }
    // },
    // sortFilter(state, action) {
    //   try {
    //     const sortProdFil = data.filter(
    //       (product) => product.sort === action.payload
    //     );
    //     state.filteredProducts = sortProdFil;
    //     // console.log("filter", sortProdFil);
    //     const saveState = JSON.stringify(sortProdFil);
    //     sessionStorage.setItem("filteredData", saveState);
    //   } catch (error) {
    //     return error;
    //   }
    // },
    // radioFilter(state, action) {
    //   try {
    //     const radioProdFil = data.filter(
    //       (product) => product.category === action.payload
    //     );
    //     state.filteredProducts = radioProdFil;
    //     console.log("filter", radioProdFil);
    //     const saveState = JSON.stringify(radioProdFil);
    //     sessionStorage.setItem("filteredData", saveState);
    //   } catch (error) {
    //     return error;
    //   }
    // },
    // combinedFilter(state, action) {
    //   try {
    //     const { sort, category } = action.payload;
    //     const combinedFilter = data.filter(
    //       (product) => product.sort === sort && product.category === category
    //     );
    //     state.filteredProducts = combinedFilter;
    //     const saveState = JSON.stringify(combinedFilter);
    //     sessionStorage.setItem("filteredData", saveState);
    //   } catch (error) {
    //     return error;
    //   }
    // },
    singleProduct(state, action) {
      try {
        const oneProduct = state.filteredProducts.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        console.log("single",oneProduct);
        const savedState = JSON.stringify(oneProduct);
        sessionStorage.setItem("singleProduct", savedState);
      } catch (error) {
        return error;
      }
    },
  },
});
export const { filterProducts, sortFilter, radioFilter, singleProduct } = productSlice.actions;
export default productSlice.reducer;

