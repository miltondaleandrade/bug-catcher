export const gitHub = "https://github.com/drachen2299/bug-catcher";
export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/bugs`;
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};

export const createEmptyBoard = () => {
  let arr = [];
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      arr.push(
        {
          x,
          y,
          contents: null 
        }
      );
    }
  }
  return arr;
}