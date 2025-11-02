/**
 * Crea un error HTTP con código y mensaje personalizados.
 * @param status Código HTTP (por ejemplo 404, 401, 500)
 * @param message Mensaje del error
 * @returns Error con propiedades `status`, etc..
 */
export const HttpError = (status: number, message: string) => {
  const error = new Error(message) as Error & { status: number };
  error.status = status;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(error, HttpError);
  }

  return error;
}
