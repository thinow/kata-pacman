export const create = ({ width, height }) => ({
  asStrings: () => {
    const line = ' '.repeat(width);
    return new Array(height).fill(line);
  },
});
