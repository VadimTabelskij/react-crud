const isStringArray = (
  arr: Array<unknown | string>,
): arr is string[] => arr.every((str) => typeof str === 'string');

export const getCarFormValues = (form: HTMLFormElement | undefined): Omit<CarsModel, 'id'> => {
  const formData = new FormData(form);
  const brands = formData.get('brands');
  if (typeof brands !== 'string') throw new Error('Missing brands');
  if (brands.length < 2) throw new Error('brands must have at least 2 symbols');

  const country = formData.get('country');
  if (typeof country !== 'string') throw new Error('Missing country');
  if (country.length < 2) throw new Error('country must have at least 2 symbols');

  const city = formData.get('city');
  if (typeof city !== 'string') throw new Error('Missing city');
  if (city.length < 2) throw new Error('city must have at least 2 symbols');

  const style = formData.get('style');
  if (typeof style !== 'string') throw new Error('Missing style');
  if (style.length < 1) throw new Error('style must have at least 2 symbols');

  const images = formData.getAll('images');
  if (!isStringArray(images)) throw new Error('All images must be strings');

  const values = {
    brands,
    location: {
      city,
      country,
    },
    style,
    images: images.filter((img) => img !== ''),
  };

  return values;
};
