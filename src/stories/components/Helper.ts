export const showCode = (code, template) => {
  return template.parameters = {
    docs: {
      source: { code },
    },
  };
};
