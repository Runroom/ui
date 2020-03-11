const formatDateTime = datetime => {
    const time = new Date(datetime);

    return `${time.getHours()}:${time.getMinutes()}`;
}

const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const pixelate = n => `${n}px`;

export { pixelate, formatDateTime, capitalize };
