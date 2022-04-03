export default function truncate(str, max, suffix) {
  const result =
    str.length < max
      ? str
      : `${str.substr(
          0,
          str.substr(0, max - suffix.length).lastIndexOf(' ')
        )}${suffix}`;
  return result;
}
