const API = import.meta.env.VITE_API_DEV;

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${API}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.message);
    return result.payload;
  } catch (error) {
    console.error("[getAllProducts]", error);
    throw error;
  }
};

export const getProductsByCategory = async (id: string) => {
  try {
    const response = await fetch(`${API}/products/category/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.message);
    return result.payload;
  } catch (error) {
    console.error("[getProductsByCategory]", error);
    throw error;
  }
};
