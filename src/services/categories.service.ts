const API = import.meta.env.VITE_API_DEV;

export const getAllCategories = async () => {
  try {
    const response = await fetch(`${API}/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.message);
    return result.payload;
  } catch (error) {
    console.error("[getAllCategories]", error);
    throw error;
  }
};