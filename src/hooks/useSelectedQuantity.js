// import { paths } from "ramda"
// import useCartItemsStore from "stores/useCartItemsStore"
// import { shallow } from "zustand/shallow";

// const useSelectedQuantity = slug => {
//   const [selectedQuantiy, setSelectedQuantiy] = useCartItemsStore(
//     paths([["cartItems", slug], ["setSelectedQuantity"]]),
//     shallow
//   );

//   const updateSelectedQuantity = quantity =>
//     setSelectedQuantiy(slug, quantity);

//   return { selectedQuantiy, setSelectedQuantiy: updateSelectedQuantity };
// };

// export default useSelectedQuantity;

import { paths } from "ramda";
import useCartItemsStore from "stores/useCartItemsStore";
import { shallow } from "zustand/shallow";

const useSelectedQuantity = slug => {
  const [selectedQuantity, setSelectedQuantity] = useCartItemsStore(
    paths([["cartItems", slug], ["setSelectedQuantity"]]),
    shallow
  );

  const updateSelectedQuantity = quantity =>
    setSelectedQuantity(slug, quantity);

  return { selectedQuantity, setSelectedQuantity: updateSelectedQuantity };
};

export default useSelectedQuantity;
