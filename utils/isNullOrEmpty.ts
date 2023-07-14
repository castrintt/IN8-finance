/* eslint-disable @typescript-eslint/no-explicit-any */
export const isNullOrEmpty = (data: any): boolean => {
  if (data === undefined || data === null) {
    return true;
  }

  if (Array.isArray(data) && data.length === 0) {
    return true;
  }

  if (typeof data === "object" && Object.keys(data).length === 0) {
    return true;
  }

  if (typeof data === "string" && data.trim() === "") {
    return true;
  }

  return false;
};
