/**
 * Genera una respuesta estándar para la API.
 * @param success Indica si la operación se realizó correctamente.
 * @param payload Datos devueltos por la solicitud o `null` si no hay contenido.
 * @returns Objeto con las propiedades `success` y `payload`.
 */
export const apiResponse = (success: boolean, payload: object | null ) => {
  return { success, payload }
}