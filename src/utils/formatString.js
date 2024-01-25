const formatString = (content, number = 70) => {
  return content.length > number ? `${content.substr(0, number)}...` : content;
};

export { formatString };
