/**
 * Checks if the user is from Tunisia based on country data.
 * @param countryData - The country response object.
 * @returns True if the country is Tunisia (TN), otherwise false.
 */
export const isFromTunisia = (countryData?: { country: string }): boolean => {
  return countryData?.country === 'TN';
};
