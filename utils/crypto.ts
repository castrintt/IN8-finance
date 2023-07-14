/* eslint-disable @typescript-eslint/no-explicit-any */
import { AES, enc } from "crypto-js";

const secretKey = import.meta.env.VITE_ENCRYPT_SECRET;

const encryptData = (data: any): string => {
  const text = JSON.stringify(data);
  const encrypted = AES.encrypt(text, secretKey).toString();
  return encrypted;
};

const decryptData = (encryptedData: string): any => {
  const decrypted = AES.decrypt(encryptedData, secretKey).toString(enc.Utf8);
  const data = JSON.parse(decrypted);
  return data;
};

export { encryptData, decryptData };
